import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();

// /api/users/

router.get("/", getUsers);

export default router;
