import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import {YOUTUBE_VIDEO_DETAILS} from '../utils/constants';
import { useEffect, useState } from "react";


const WatchVideoPage = () => {
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState({});

    const getVideoDetails = async() => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS + searchParams.get("v"));
        const json= await data.json();
        console.log(json.items[0]);
        setVideoDetails(json.items[0]);
    }

    useEffect(()=>{
        getVideoDetails();

    },[searchParams.get("v")])


    return (
        <div className="mx-10 my-5">
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
            {videoDetails.snippet && <div className="my-4 text-[#0f0f0f]">
                <h1 className="text-xl font-bold">{videoDetails?.snippet?.title}</h1>
                <div>
                    <span>
                        <h2 className="font-semibold">{videoDetails?.snippet?.channelTitle}</h2>
                        <h3>{`${(Number(videoDetails?.statistics?.viewCount)/1000).toFixed(1)}K`}</h3>
                    </span>
                </div>
            </div>}
            <CommentContainer/>
        </div>
    );
}

export default WatchVideoPage;