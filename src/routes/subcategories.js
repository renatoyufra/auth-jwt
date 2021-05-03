import { Router } from "express";
import {
    getAllSubcategories,
    updateSubcategoryById,
} from "../controllers/subcategory.controller";

const router = Router();

// /api/subcategories/

router.get("/", getAllSubcategories);
router.put("/:id", updateSubcategoryById);

export default router;
