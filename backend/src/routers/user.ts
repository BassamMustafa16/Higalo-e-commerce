import express from "express";
import { login, createUser } from "../controllers/userController";

const router = express.Router();

router.use(express.json());  // make sure router can parse JSON

router.post("/login", (req, res, next) => {
  Promise.resolve(login(req, res)).catch(next);
});
router.post("/register", (req, res, next) => {
  Promise.resolve(createUser(req, res)).catch(next);
});

export default router;
