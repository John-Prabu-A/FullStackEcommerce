import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("List of Products");
}

export function getProductById(req: Request, res: Response) {
  const id = req.params.id;
  res.send(`Product with id : ${id}`);
}

export function createProduct(req: Request, res: Response) {
  console.log(req.body);
  res.send("Product Created.");
}

export function updateProduct(req: Request, res: Response) {
  res.send("UpdateProduct");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("deleteProduct");
}
