import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

app.listen("5000", () =>{
    console.log("server is running on port 5000");
})