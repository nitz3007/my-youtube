import React from "react"

const VideoCardShimmer = (props) => {
  return (
    <div className="w-96  mx-2 my-4 animate-pulse">
      <div className="bg-[#eeeeee] w-full h-52 rounded-xl"></div>
      <div className="">
        <div className="w-40 h-4 bg-[#eeeeee] mt-2"></div>
        <div className="w-full h-4 bg-[#eeeeee] mt-2"></div>
      </div>
    </div>
  )
};

export default VideoCardShimmer;
