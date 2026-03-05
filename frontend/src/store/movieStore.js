import { create } from "zustand";

const useMovieStore = create((set, get) => ({
  movies: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  seatSelections: null,

  setMovies: (movies) => set({ movies }),

  setSearchQuery: (value) => set({ searchQuery: value }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (message) => set({ error: message }),

  getMovieById: (movieId) => {
    const { movies } = get();
    console.log(movies);
    
    return movies.find((movie) => {
      return movie.imdbID == movieId;
    });
  },
}));

export default useMovieStore;
