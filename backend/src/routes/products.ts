import { Router } from "express";
import { getBestSeller } from "../controllers/productsController";

const router = Router();

router.get("/best-sellers", getBestSeller);

export default router;
