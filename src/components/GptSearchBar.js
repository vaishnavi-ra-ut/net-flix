import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import the library
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addGptMovies} from "../utils/gptSlice"

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch=useDispatch();

  // Initialize the Google Generative AI client with your API key
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const searchResults = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    
    const json = await data.json();

    return json.results;
  }

  const handleGPT = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 7 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya , la la land , titanic";

      // Use the model to generate content
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(gptQuery);
      const gptMovies= result.response?.candidates[0]?.content?.parts[0]?.text.split(",");
   
      const promiseArray = gptMovies.map((movies)=>searchResults(movies));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
      );
  };

  return (
    <div>
      <form
        className="py-[7%] -mt-[53%] z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-6/12 ml-[24%]">
          <input
            ref={searchText}
            className="border border-black rounded-2xl py-1 px-4 pr-10 bg-black bg-opacity-85 text-center text-white font-semibold w-full placeholder-gray-400"
            type="text"
            placeholder="What's On Your Mind ?"
          />
          <button
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-3xl font-extrabold text-[#e3000b]"
            onClick={handleGPT}
          >
            ⌕
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;

