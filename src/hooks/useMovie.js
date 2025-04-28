import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    if (!movieId) {
      console.error("❌ Movie ID is undefined!");
      return;
    }

    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      console.log("Fetching from URL:", apiUrl);

      const response = await fetch(apiUrl, API_OPTIONS);
      const json = await response.json();

      console.log("📺 API Response:", json);

      if (json.results?.length > 0) {
        const filterData = json.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        console.log("✅ Trailer Found:", trailer);
        dispatch(addTrailerVideo(trailer));
      } else {
        console.warn("⚠️ No trailer found for movie ID:", movieId);
      }
    } catch (error) {
      console.error("❌ Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
