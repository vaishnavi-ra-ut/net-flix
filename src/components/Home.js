import Header from "./Header"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Home = () => {

  useNowPlaying();

  const showGpt = useSelector((store)=>store.gpt.showGptSearch);

  const navigate= useNavigate();
  
  const handleSignOut=()=>{

      signOut(auth)
      .then(()=>{
          navigate("/")
      })
      .catch((error)=>{
          console.log(error);
      }); 
  }
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