import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBestSeller = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { itemsSold: "desc" },
      take: 4,
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
