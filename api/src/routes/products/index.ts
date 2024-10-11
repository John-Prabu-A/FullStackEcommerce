import express, { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of Products");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Product with id : ${id}`);
});

router.post("/", (req, res) => {
  res.send("Product Added Successfully");
});

export default router;
