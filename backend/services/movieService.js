import fs from "fs/promises";

export const getAllMovies = async () => {
  const movieData = await fs.readFile("../backend/data/movies.json", "utf-8");
  const goodMovieData = JSON.parse(movieData);
  const seatsData = await fs.readFile("../backend/data/seats.json", "utf-8");
  const goodSeatsData = JSON.parse(seatsData);
  const movieAndSeats = goodMovieData.map((m) => {
    const availbleSeats= goodSeatsData[m.imdbID].filter((s) => s.isTaken === false);
    return {...m,listOfSeats:availbleSeats}
  });
  return movieAndSeats;
};
