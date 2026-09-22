import express from "express";
import { createTask, getAllTasks } from "../db/articles.js";

const router = express.Router();

router.get("/", (request, response) => {
  response.json(getAllTasks());
});

router.post("/", (request, response) => {
  const article = createTask(request.body);

  response.status(201).json(task);
});

export default router;
