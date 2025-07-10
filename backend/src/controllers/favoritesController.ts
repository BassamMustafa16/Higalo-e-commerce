import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFavorite = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user?.userId;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { product: true },
    });
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const addFavorite = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user?.userId;
  const { productId } = req.body;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    // Prevent duplicate favorites
    const exists = await prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    if (exists) {
      {
        res.status(400).json({ message: "Already in favorites" });
        return;
      }
    }

    const favorite = await prisma.favorite.create({
      data: { userId, productId },
      include: { product: true },
    });
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const removeFavorite = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user?.userId;
  const { productId } = req.body;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const favorite = await prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    if (!favorite) {
      res.status(404).json({ message: "Favorite not found" });
      return;
    }
    await prisma.favorite.delete({
      where: { userId_productId: { userId, productId } },
    });
    res.status(200).json({ message: "Favorite removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
