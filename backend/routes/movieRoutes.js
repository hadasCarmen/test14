import express from "express";

import { getAllMoviesController } from "../controllers/movieController.js";

const router = express.Router();

router.get("/api/movies", getAllMoviesController);

export default router;
