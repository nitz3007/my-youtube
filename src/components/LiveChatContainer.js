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
            
        }, 60000);

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
        <div className="w-full h-full border rounded-xl overflow-x-hidden overflow-y-auto">
            <div className="border-b px-6 py-3 z-10 fixed bg-white w-full rounded-t-xl">
                <h1 className="text-[#0f0f0f]">Live Chat</h1>
            </div>
            <div className="flex flex-col justify-end h-95 w-full">
                {chatMessages?.map(chat => {
                    return <ChatMessage name={chat.name} message={chat.message}/>
                })}
                {/* <ChatMessage name={"Niharika"} message={"Lorem ipsum ate de in de ja vu sky black honey bear1"}/>
                <ChatMessage name="Akshay Saini" message="Lorem ipsum ate de in de ja vu sky black honey bear2"/>
                <ChatMessage name="Sparsh Sharma" message="Lorem ipsum ate de in de ja vu sky black honey bear3"/>
                <ChatMessage name="Ananya Sinha" message="Lorem ipsum ate de in de ja vu sky black honey bear4"/>
                <ChatMessage name="Keerti chopra" message="Lorem ipsum ate de in de ja vu sky black honey bear5"/> */}
            </div>
        </div>
    )
};

export default LiveChatContainer;
