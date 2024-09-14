import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-5 m-14 text-white font-mono font-bold bg-black bg-opacity-90 w-[90%] relative z-10">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions ;