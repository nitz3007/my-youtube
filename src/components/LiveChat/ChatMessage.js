import React from "react"
import UserIcon from "../../assets/profile-img.jpg";

const ChatMessage = ({name, message}) => {
    // console.log(chatDetails,"chatDetails");
    // const {authorChannelId, displayMessage:message} = chatDetails.snippet;
  return (
    <div className="flex text-[#0f0f0f] items-center mx-4 my-2">
        <img src={UserIcon} alt="user-profile" className="h-7 mr-2"/>
        <span className="inline">
            <text className="text-[13px] font-semibold mr-2 text-[#11111199]">{name}</text>
            <text className="text-[13px]">{message}</text>
        </span>
    </div>
  )
};

export default ChatMessage;
