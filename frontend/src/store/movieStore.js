import { create } from "zustand";

const loadSeatSelectionsFromStorage = () => {
  try {
    const storedSelections = localStorage.getItem("seatss");
    return storedSelections ? JSON.parse(storedSelections) : {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

const saveSeatSelectionsToStorage = (selections) => {
  try {
    localStorage.setItem("seatss", JSON.stringify(selections));
  } catch (error) {
    console.log(error);
  }
};

const useMovieStore = create((set, get) => ({
  movies: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  seatSelections: loadSeatSelectionsFromStorage(),

  setMovies: (movies) => set({ movies }),

  setSearchQuery: (value) => set({ searchQuery: value }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (message) => set({ error: message }),

  selectSeat: (movieId, seatNumber) => {
    const newSelections = {
      ...get().seatSelections,
      [movieId]: seatNumber,
    };

    set({ seatSelections: newSelections });
    saveSeatSelectionsToStorage(newSelections);
  },

  loadSeatSelectionsFromStorage: () => {
    const selections = loadSeatSelectionsFromStorage();
    set({ seatSelections: selections });
  },

  getMovieById: (movieId) => {
    const { movies } = get();
    return movies.find((movie) => movie.id === movieId);
  },

  getAvailableSeatsForMovie: (movieId) => {
    const { movies } = get();
    const movie = movies.find((m) => m.id === movieId);
    return movie?.availableSeats || [];
  },

  getSelectedSeatForMovie: (movieId) => {
    return get().seatSelections[movieId] || null;
  },
}));

export default useMovieStore;
