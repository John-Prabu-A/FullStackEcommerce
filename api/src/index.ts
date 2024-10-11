import express, { json, Request, Response, Router, urlencoded } from "express";
import producstRoute from "./routes/products";

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", producstRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
