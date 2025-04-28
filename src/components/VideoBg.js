import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovie";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log("Trailer Video Key:", trailerVideo?.key);
  console.log("Trailer Video Object:", trailerVideo);

  useMovieTrailer(movieId);
  console.log("videobg");
  return (
    <div className="w-screen">
      {trailerVideo?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          //frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <p className="text-center text-white text-xl">No trailer available</p>
      )}
    </div>
  );
};
export default VideoBackground;