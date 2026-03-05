import { getAllMovies } from "../services/movieService.js";

export const getAllMoviesController = async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error);
  }
};
