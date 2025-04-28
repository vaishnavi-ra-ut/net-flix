import React from "react";
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  console.log("movielist");
    return (
      <div className="ml-7">
        <h1 className="text-2xl font-semibold py-2 text-white">{title}</h1>
        <div className="flex overflow-x-auto hide-scrollbar whitespace-nowrap">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default MovieList