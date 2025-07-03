import { Router } from "express";
import {
  getBestSeller,
  getNewArrivals,
} from "../controllers/productsController";

const router = Router();

router.get("/best-sellers", getBestSeller);
router.get("/new-arrivals", getNewArrivals);

export default router;
