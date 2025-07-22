import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [index, setIndex] = useState(0); // index for dynamic movie

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    // Cycle through movies every 6 seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 600000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [movies]);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[index]; // dynamically chosen movie
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
