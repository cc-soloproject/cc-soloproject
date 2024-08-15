import express from "express";
import dotenv from "dotenv";
import router from "./Routes.js";
import cors from "cors";
import path from "path"; //

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "frontend", "dist"))); //

app.use(express.json());
app.use(router);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "./src/main.jsx")); //
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
