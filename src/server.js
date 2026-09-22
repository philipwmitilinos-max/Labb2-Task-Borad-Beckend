import express from "express";
import cors from "cors";
import router from "../routes/articleRoutes.js";

const app = express();
const port = 3005;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"]
  }),
);

app.use(express.json());

app.use("/api/tasks", router);

app.listen(port, () => {
  console.log("Server startad");
});
