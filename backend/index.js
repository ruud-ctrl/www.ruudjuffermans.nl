import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: "*", // Or use your frontend origin: "http://localhost:5173"
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/api/users", async (req, res) => {
  // const { rows } = await db.query("SELECT * FROM users");
  res.json({key : "val"});
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
