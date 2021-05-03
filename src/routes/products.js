import { Router } from "express";
import {
    getProductById,
    getProductByCode,
    updateProduct
} from "../controllers/product.controller";

const router = Router();

router.get("/:code", getProductByCode);
router.put("/:id", updateProduct)
export default router;
