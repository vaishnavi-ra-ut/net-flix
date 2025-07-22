import React from 'react'

const VideoTitle = ({title , overview}) => {
  console.log("videotitle");
  return (
    <div className="pt-[14%] pl-[4%] mt-4 absolute bg-gradient-to-r from-black bg-cover w-screen aspect-video">
        <h1 className='font-bold text-4xl py-3 text-white'>{title}</h1>
        <p className='w-1/3 py-2 text-white/75 '>{overview}</p>
        
        <div className='py-2'>
            <button className=" bg-white text-black font-bold py-1 px-3 w-[8%] my-2 h-10 text-md  rounded-md hover:bg-opacity-80"> ▷Play </button>

            <button className=" bg-gray-400 text-black font-bold bg-opacity-35 py-1 px-3 my-2 w-[10%] mx-2 h-10 text-md rounded-md hover:bg-opacity-60"> ⓘ More Info </button>
        </div>

    </div>
  )
}

export default VideoTitle;