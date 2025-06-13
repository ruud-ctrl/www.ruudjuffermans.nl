import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

app.use(express.json());

app.get("/api/users", async (req, res) => {
  // const { rows } = await db.query("SELECT * FROM users");
  res.json({key : "val"});
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
