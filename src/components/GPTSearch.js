import React from "react";
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GPTSearch = () => {
  return (
        <>
          <div className="mt-[170px]">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
            alt="background"
            aria-hidden="true"
            className="fixed top-0 bottom-0 "
          />
        </div>
        <div>
        <div className="fixed z-30 top-[565px] ml-[150px] w-[1000px]">
          <GptSearchBar/>
          </div>
          <div className="">
            <GptSuggestions/>
          </div>
        </div>
        </>        
  )
}

export default GPTSearch