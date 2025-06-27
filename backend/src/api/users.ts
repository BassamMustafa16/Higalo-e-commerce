import express from "express";
import { getAllUsers, createUser } from "../controllers/userController";

const router = express.Router();

router.use(express.json());  // make sure router can parse JSON

router.get("/", getAllUsers);
router.post("/", (req, res, next) => {
  Promise.resolve(createUser(req, res)).catch(next);
});

export default router;
