import React from "react"
import UserIcon from "../../assets/profile-img.jpg";

const Comment = ({data}) => {
    const {name, text} = data;
  return (
    <div className="flex text-[#0f0f0f] items-center my-2">
        <img src={UserIcon} alt="user-profile" className="h-10 mr-2"/>
        <span>
            <h2 className="text-[13px] font-semibold">{name}</h2>
            <p className="text-sm">{text}</p>
        </span>    
    </div>
  )
};

export default Comment;
