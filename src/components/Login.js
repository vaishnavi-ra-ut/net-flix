import { useState } from "react";
import Header from "./Header"

const Login = () => {

  const [signIn , setSignIn]= useState(true);
  
  const toggle=()=>{
      setSignIn(!signIn);
  }
  return (
    <div className="absolute" >
      <Header/>
      <div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr">
      </img>
      </div>
      <form className="relative flex-col pl-10 pr-10 pb-8 pt-8 z-10 rounded-md -mt-[48%] ml-[38%] bg-black w-3/12 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl pb-3  ">{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn && (
          <input placeholder="Full Name" className="p-2 my-4 w-full mr-1 bg-opacity-85 bg-gray-800 rounded-md"></input>
        )}
        <input placeholder="email" type="text" className="p-2 my-4 w-full mr-1 bg-opacity-85 bg-gray-800 rounded-md"></input>
        <input placeholder="password" type="password" className="p-2 my-4 w-full bg-opacity-85 bg-gray-800 rounded-md"></input>
        <button className="p-2 my-6 w-full bg-[#e3000b] rounded-md text-white" >{signIn ? "Sign In" : "Sign Up"}</button>
        <p className="text-[12px]" onClick={toggle}>{signIn ? "New to Netflix , Sign Up" : "Already a user ? Sign In"}</p>
      </form>
    </div>
  )
};

export default Login;