import React, {useEffect, useState} from "react";
import {CHANNEL_DETAILS} from "../utils/constants";
import {time_ago} from "../utils/util";

const VideoDetails = ({videoDetails}) => {

    const [channelDetails, setChannelDetails] = useState();
    const [videoDescription , setVideoDescription] = useState();

    const getChannelDetails = async() => {
        const data = await fetch(CHANNEL_DETAILS + videoDetails?.snippet?.channelId);
        const json = await data.json();
       
        console.log(json, "channelDetail");
        setChannelDetails(json.items[0]);
    }

    useEffect(()=>{
        getChannelDetails();
    },[]);

    useEffect(()=> {
        const input = videoDetails?.snippet?.description;
        const urlRegex = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
        const matches = input.match(urlRegex);
        let output = input;
        if(matches && matches.length> 0) {
            for(let match of matches){
                output = output.replace(match, `<a style="color:#065fd4;" href="${match}">${match}</a>`);
            }
        }
        
        setVideoDescription(output);
    }, [videoDetails])
   
    

    
    return (
        <div className="my-4 text-[#0f0f0f]">
            <h1 className="text-xl font-bold">{videoDetails?.snippet?.title}</h1>
            <div className="mt-2">
                <div className="flex items-center">
                    <img src={channelDetails?.snippet?.thumbnails?.default?.url} alt="channel thumbnail" className="h-10 w-10 rounded-full"/>
                    <span className="ml-4">
                        <h2 className="font-semibold">{channelDetails?.snippet?.title}</h2>
                        <h3 className="text-xs text-[#606060]">{`${(Number(channelDetails?.statistics?.subscriberCount)/1000).toFixed(0)}K subscribers`}</h3>
                    </span>
                </div>
                <div className="bg-[#eeeeee] rounded-lg p-3 mt-4 ">
                    <span className="inline text-sm text-[#0f0f0f] font-semibold">
                        <text className="mr-2">{`${Number(videoDetails?.statistics?.viewCount/1000).toFixed(0)}K views`}</text>
                        <text>{time_ago(videoDetails?.snippet?.publishedAt)}</text>
                    </span>
                    <pre dangerouslySetInnerHTML={{__html: videoDescription}} className="text-wrap text-sm text-[#0f0f0f] font-sans"/>
                </div>
            </div>
        </div>
    )
};

export default VideoDetails;
