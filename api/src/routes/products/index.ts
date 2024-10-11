import express, { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { productsTable } from "../../db/productsSchema";
export const createProductSchema = createInsertSchema(productsTable).omit({
  id: true,
});

export const updateProductSchema = createInsertSchema(productsTable)
  .omit({
    id: true,
  })
  .partial();

const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post("/", validateData(createProductSchema), createProduct);

router.put("/:id", validateData(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
