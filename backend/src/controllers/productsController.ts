import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBestSeller = async (req: Request, res: Response) => {
  try {
    const bestSellers = await prisma.product.findMany({
      orderBy: { itemsSold: "desc" },
      take: 4,
    });
    res.status(200).json(bestSellers);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getNewArrivals = async (req: Request, res: Response) => {
  try {
    const newArrivals = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 4,
    });
    res.status(200).json(newArrivals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // Find product
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: {
          select: { name: true },
        },
      },
    });

    if (!product) {
      res.status(404).send("Product not found");
      return;
    }

    // Aggregate ratings
    const ratingStats = await prisma.rating.aggregate({
      where: { productId: id },
      _avg: { rate: true },
      _count: { rate: true },
    });

    const averageRating = ratingStats._avg.rate || 0;
    const ratingsCount = ratingStats._count.rate || 0;

    // Round to nearest 0.5
    const roundedAverageRating = Math.round(averageRating * 2) / 2;

    // Build response
    const { category, ...rest } = product;
    res.status(200).json({
      ...rest,
      categoryName: category?.name || null,
      averageRating,
      ratingsCount,
      roundedAverageRating
    });

  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
};

