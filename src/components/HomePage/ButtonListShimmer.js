import React from "react"

const ButtonListShimmer = (props) => {
  return (
    <div className="max-w-[80vw] overflow-hidden">
        <ul className="flex gap-4 flex items-center p-2">
            {[...Array(10)].map((e)=>(
              <div className="w-24 h-8 bg-[#eeeeee] rounded-md"></div>
            ))}
        </ul>
    </div>
  )
};

export default ButtonListShimmer;
