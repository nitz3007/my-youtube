import React, { useEffect, useState } from "react"
import {useSearchParams, useNavigate} from 'react-router-dom';
import {YOUTUBE_LIVE_VIDEO_DETAILS, YOUTUBE_LIVE_CHAT_LIST} from "../utils/constants";
import LiveChatContainer from "./LiveChatContainer";

const WatchLivePage = (props) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [liveVideoDetails, setLiveVideoDetails] = useState();
    const [liveChatList, setLiveChatList] = useState();

    const getLiveVideoDetails = async() => {
        const data = await fetch(YOUTUBE_LIVE_VIDEO_DETAILS + searchParams.get("v"));
        const json = await data.json();
        setLiveVideoDetails(json.items[0]);
        console.log(json, "live data");

        if(json?.items[0].liveStreamingDetails?.activeLiveChatId) {
          getLiveChatData(json?.items[0].liveStreamingDetails?.activeLiveChatId);
        } else {
          navigate("/watch?v="+searchParams.get("v"));
        }
        
    }

    const getLiveChatData = async(chatId) => {
      
      const chatData = await fetch(YOUTUBE_LIVE_CHAT_LIST + chatId);
      const chatjson = await chatData.json();
      setLiveChatList(chatjson.items);
      console.log(chatjson);
    }



    useEffect(()=>{
        getLiveVideoDetails();
    },[searchParams.get("v")]);

  return (
    <div className="mx-10 my-5 grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <iframe 
            width="920" 
            height="420" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullscreen>                    
        </iframe>
      </div>
      
      <div className="h-[420px]">
        <LiveChatContainer/>
      </div>
    </div>
  )
};

export default WatchLivePage;
