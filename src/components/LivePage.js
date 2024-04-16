import React, { useEffect } from "react"
import {YOUTUBE_LIVE_BROADCAST_LIST} from "../utils/constants";

const LivePage = (props) => {

  useEffect(()=>{
    getLiveBroadcastList();
  },[]);

  const getLiveBroadcastList = async() => {
    const data = await fetch(YOUTUBE_LIVE_BROADCAST_LIST);
    const json = await data.json();
    console.log(json, "Live Data");
  }

  return (
    <div>
      Live Page
    </div>
  )
};

export default LivePage;
