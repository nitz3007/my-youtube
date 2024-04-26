import React, {useEffect, useState} from "react";
import {time_ago} from "../../utils/util";

const VideoDetails = ({videoDetails}) => {

   
    const [videoDescription , setVideoDescription] = useState();
    const [isDescriptionBoxExpanded, setIsDescriptionBoxExpanded] = useState(false);

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
   
    const toggleDescriptionBoxSize = () => {
        setIsDescriptionBoxExpanded(prev => !prev);
    }
    
    return (                  
        <div className="bg-[#eeeeee] rounded-lg p-3 mt-4 ">
            <span className="inline text-sm text-[#0f0f0f] font-semibold">
                <text className="mr-2">{`${Number(videoDetails?.statistics?.viewCount/1000).toFixed(0)}K views`}</text>
                <text>{time_ago(videoDetails?.snippet?.publishedAt)}</text>
            </span>
            <div>
                <pre 
                    dangerouslySetInnerHTML={{__html: videoDescription}} 
                    className={`text-wrap text-sm text-[#0f0f0f] font-sans box-border leading-5 overflow-hidden ${isDescriptionBoxExpanded ? 'h-initial' : 'h-[calc(1.25rem*3)] relative before:content-[""] before:absolute before:h-full before:w-full before:bg-gradient-to-b from-transparent from-70% to-[#eeeeee]'}`}
                />
            </div>
            
            <button className="text-sm text-[#0f0f0f] font-semibold py-2 outline-none" onClick={toggleDescriptionBoxSize}>{isDescriptionBoxExpanded ? "Show Less" : "Show more"}</button>
        </div>   
    )
};

export default VideoDetails;
