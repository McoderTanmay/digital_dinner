import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectPostgres } from "./config/db.postgres.js";
import { connectMongoDB } from "./config/db.mongo.js";
import { syncModels } from "./models/postgres/index.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));

connectMongoDB();
connectPostgres().then(syncModels);

app.listen("5000", () =>{
    console.log("server is running on port 5000");
})