import React, {useState, useEffect} from "react";
import {CHANNEL_DETAILS} from "../../utils/constants";

const VideoFooter = ({title, channelId}) => {
    const [channelDetails, setChannelDetails] = useState();

    useEffect(()=>{
        const getChannelDetails = async() => {
            const data = await fetch(CHANNEL_DETAILS + `?channelId=${channelId}`);
            const json = await data.json();
    
            setChannelDetails(json.items[0]);
        }

        getChannelDetails();
    },[channelId]);

    return (
        <div className="my-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex items-center mt-2">
                <img src={channelDetails?.snippet?.thumbnails?.default?.url} alt="channel thumbnail" className="h-10 w-10 rounded-full"/>
                <span className="ml-4">
                    <h2 className="font-semibold">{channelDetails?.snippet?.title}</h2>
                    <h3 className="text-xs text-[#606060]">{`${(Number(channelDetails?.statistics?.subscriberCount)/1000).toFixed(0)}K subscribers`}</h3>
                </span>
            </div>
        </div>
    )
};

export default VideoFooter;
