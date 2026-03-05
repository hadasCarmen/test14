import { useEffect, useState } from "react";
import { Link } from "react-router";

import useMovieStore from "../store/movieStore.js";

import "./homeMovie.css";
export default function HomeMovie() {
  const {
    movies,
    isLoading,
    error,
    searchQuery,
    setMovies,
    setSearchQuery,
    setLoading,
    setError,
  } = useMovieStore();

  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const chekRoute = await fetch("http://localhost:5000/api/movies");
        if (!chekRoute.ok) {
          throw new Error("error");
        }

        const getingMovie = await chekRoute.json();
        console.log(getingMovie);
        setMovies(getingMovie);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getMovies();
    console.log(movies);
  }, [setLoading, setMovies, setError]);

  useEffect(() => {
    if (!searchQuery) {
      setFilterMovies(movies);
      return;
    }

    const listiMoviesFilter = [];

    movies.forEach((m) => {
      if (m.Title.toLowerCase().includes(searchQuery)) {
        listiMoviesFilter.push(m);
      }
    });
    setFilterMovies(listiMoviesFilter);
  }, [movies, searchQuery]);

  const writenSomething = (s) => {
    setSearchQuery(s.target.value);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Movies Website</h1>{" "}
      </header>

      <div>
        <input
          type="text"
          placeholder="serch specific movie"
          value={searchQuery}
          onChange={writenSomething}
        />
      </div>
      <div className="bigPicture">
        {filterMovies &&
          filterMovies.map((m) => {
            return (
              <Link to={`/movies/${m.imdbID}`} key={m.imdbID}>
                <div className="image1">
                  {m.Year}
                  <br />
                  {m.Title}
                  <br />
                  <img src={m.Poster} alt="" />
                  <br />
                  {m.imdbRating}
                  <br />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
