import { Router } from "express";
import { getAll } from "../controllers/categoriesController";

const router = Router();

router.get("/get-all", getAll);

export default router;
