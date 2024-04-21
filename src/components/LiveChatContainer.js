import React, { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { YOUTUBE_LIVE_CHAT_LIST } from "../utils/constants"

const LiveChatContainer = ({liveChatId}) => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveChatList, setLiveChatList] = useState();
    

    useEffect(()=>{
        const i = setInterval(()=>{
            //API Polling
            console.log("API Polling");
            if(liveChatId) {
                getLiveChatData(liveChatId);
            }
            
        }, 5000);

        return ()=> clearInterval(i);
    },[liveChatId]);
    

    const getLiveChatData = async(chatId) => {
        const chatData = await fetch(YOUTUBE_LIVE_CHAT_LIST + chatId);
        const chatjson = await chatData.json();
        // setLiveChatList(chatjson.items);4
        const chatObj = chatjson?.items.map(chatItem => ({
            name: chatItem?.authorDetails.displayName,
            message: chatItem?.snippet.displayMessage
            
        }))
        dispatch(addMessage(chatObj));
      }

    return (
        <div className="w-full h-full border rounded-xl overflow-y-scroll">
            <div className="border-b px-6 py-3">
                <h1 className="text-[#0f0f0f]">Live Chat</h1>
            </div>
            <div className="flex flex-col justify-end">
                {chatMessages?.map(chat => {
                    return <ChatMessage name={chat.name} message={chat.message}/>
                })}
            </div>
        </div>
    )
};

export default LiveChatContainer;
