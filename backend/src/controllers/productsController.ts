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
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      res.status(200).json(product);
      return;
    } else {
      res.status(404).send("Product not found");
      return;
    }
  } catch (err) {
    res.status(404).json(err);
    return;
  }
};
