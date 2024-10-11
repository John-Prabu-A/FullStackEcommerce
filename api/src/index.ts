import express, { Request, Response, Router } from "express";
import producstRoute from "./routes/products";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", producstRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
