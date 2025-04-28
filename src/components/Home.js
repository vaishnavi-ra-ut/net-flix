import React from "react";
import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Home = () => {

  useNowPlaying();
  console.log("home");
  const showGpt = useSelector((store)=>store.gpt.showGptSearch);
  
  return (
    <div className="w-screen">
      <Header/>
      { showGpt ? ( 
        <GPTSearch/> 
      ) : (
        <> 
          <MainContainer/>
          <SecondaryContainer/>
        </> )
      }                    
    </div>
  )
}

export default Home