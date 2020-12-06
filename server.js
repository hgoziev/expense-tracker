import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import mongoose from "mongoose";
import transactions from "./routes/transactions.js";
import { mongoURL } from "./keys";

const app = express();
const port = process.env.PORT || 9000;
const mangoURI = mongoURL;

app.use(express.json());
app.use("/transactions", transactions);

try {
  mongoose.connect(mangoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("MongoDB connected".green.bold.underline);
} catch (err) {
  console.log(err);
}
app.listen(
  port,
  console.log(`Server connection established in port : ${port}`.yellow.bold)
);
