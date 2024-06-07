import React, { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { YOUTUBE_LIVE_CHAT_LIST } from "../../utils/constants"
import SendIcon from "../../assets/send-icon.svg";

const LiveChatContainer = ({liveChatId}) => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [reply, setReply] = useState("");
    

    useEffect(()=>{

        const getLiveChatData = async(chatId) => {
            const chatData = await fetch(YOUTUBE_LIVE_CHAT_LIST + `?liveChatId=${chatId}`);
            const chatjson = await chatData.json();
            const chatObj = chatjson?.items.map(chatItem => ({
                name: chatItem?.authorDetails.displayName,
                message: chatItem?.snippet.displayMessage
                
            }))
            dispatch(addMessage(chatObj));
        }
        
        const i = setInterval(()=>{
            //API Polling
            if(liveChatId) {
                //commented to avoid yt quota exhaustion
                getLiveChatData(liveChatId);
            }
            
        }, 5000);

        return ()=> clearInterval(i);
    },[liveChatId, dispatch]);
    

    

    // const handleSendChat = () => {
    //     console.log(reply);
    //     snedLiveChatMsg();
    // }

    //The API requires Login Authentication to send live chat
    // const snedLiveChatMsg = async() => {
    //     const msgPayload = {
    //         "snippet": {
    //             "liveChatId": liveChatId,
    //             "type": "textMessageEvent",
    //             "textMessageDetails": {
    //                 "messageText": reply
    //             }
    //         }
    //     }
    //     const requestBody = {
    //         method: "post",
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(msgPayload)
    //     }
    //     const response = await fetch(YOUTUBE_SEND_LIVE_CHAT, requestBody);
    //     const data = await response.json();
    //     console.log(data);
    // }

    return (
        <div className="w-full h-[32rem] border rounded-xl overflow-x-hidden  overflow-y-auto relative">
            <div className="border-b px-6 py-3 z-1 bg-white w-full rounded-t-xl sticky top-0 ">
                <h1 className="text-[#0f0f0f]">Live Chat</h1>
            </div>
            <div className="flex flex-col justify-end w-full h-full">
                {chatMessages?.map(chat => {
                    return <ChatMessage name={chat.name} message={chat.message}/>
                })}
                {/* <ChatMessage name={"Niharika"} message={"Lorem ipsum ate de in de ja vu sky black honey bear1"}/>
                <ChatMessage name="Akshay Saini" message="Lorem ipsum ate de in de ja vu sky black honey bear2"/>
                <ChatMessage name="Sparsh Sharma" message="Lorem ipsum ate de in de ja vu sky black honey bear3"/>
                <ChatMessage name="Ananya Sinha" message="Lorem ipsum ate de in de ja vu sky black honey bear4"/>
                <ChatMessage name="Keerti chopra" message="Lorem ipsum ate de in de ja vu sky black honey bear5"/> */}
            </div>
            <div className="flex items-center px-6 py-3 border-t sticky bottom-0 bg-white">
                <input 
                    type="text" 
                    placeholder="Chat..." 
                    className="border rounded-full w-full py-1 px-4 outline-none bg-[#eeeeee] mr-4"
                    value={reply}
                    onChange={(e)=>{setReply(e.target.value)}}
                    
                />
                <button disabled className="w-12 h-10 bg-[#eeeeee] rounded-full px-2.5 py-1 opacity-30 cursor-not-allowed">
                    <img className="" src={SendIcon} alt="send"/>
                </button>
            </div>
        </div>
    )
};

export default LiveChatContainer;
