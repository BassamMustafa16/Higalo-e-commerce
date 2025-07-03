import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    const subcategories = await prisma.subcategory.findMany();
    res.status(200).json({categories, subcategories});
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
