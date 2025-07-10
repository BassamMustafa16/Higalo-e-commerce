import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import { getFavorite, addFavorite, removeFavorite } from "../controllers/favoritesController";

const router = Router();

router.get("/get-all", authenticateToken, getFavorite);
router.post("/add-favorite", authenticateToken, addFavorite);
router.delete("/remove-favorite", authenticateToken, removeFavorite);

export default router;
