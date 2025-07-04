import { Router } from "express";
import {
  getBestSeller,
  getNewArrivals,
  getProduct,
} from "../controllers/productsController";

const router = Router();

router.get("/best-sellers", getBestSeller);
router.get("/new-arrivals", getNewArrivals);
router.get("/:id", getProduct);

export default router;
