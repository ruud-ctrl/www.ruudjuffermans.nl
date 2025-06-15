import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/", async (req, res) => {
  // const { rows } = await db.query("SELECT * FROM users");
  res.json({status: "healthy"});
});

app.get("/api/todos", async (req, res) => {
  res.json([{id: 1, title: "hello"}]); // of: res.json({ todos: [] });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
