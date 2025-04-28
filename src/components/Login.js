import React from "react";
import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure this is correct
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  console.log("login");
  // const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggle = () => {
    setSignIn(!signIn);
  };


  const handleClick = (e) => {
    e.preventDefault();
    
    if (!emailRef.current || !passwordRef.current) {
      setErrorMsg("Email and Password fields are required.");
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const msg = validateData(email, password);
    setErrorMsg(msg);

    if (msg) return;

    if (!signIn) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // navigate("/home");
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // navigate("/home");
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="z-10 absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        />
      </div>
      <form className="relative flex-col pl-10 pr-10 pb-8 pt-8 z-10 rounded-md -mt-[48%] ml-[36%] bg-black w-[30%] text-white bg-opacity-80">
        <h1 className="font-bold text-3xl pb-3">{signIn ? "Sign In" : "Sign Up"}</h1>

        <input ref={emailRef} placeholder="Email" type="text" className="p-3 my-4 w-full border border-gray-500 bg-opacity-85 bg-zinc-950 rounded-md" />
        <input ref={passwordRef} placeholder="Password" type="password" className="p-3 my-4 w-full border border-gray-500 bg-opacity-85 bg-zinc-950 rounded-md" />
        
        {errorMsg && <p className="font-bold text-[12px] text-[#e3000b]">{errorMsg}</p>}

        <button className="p-2 my-6 w-full bg-[#e3000b] rounded-md text-white" onClick={handleClick}>{signIn ? "Sign In" : "Sign Up"}</button>
        
        <p className="text-[12px] cursor-pointer" onClick={toggle}>
          {signIn ? "New to Netflix? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
