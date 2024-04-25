import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import {YOUTUBE_VIDEO_DETAILS} from '../utils/constants';
import { useEffect, useState } from "react";
import VideoDetails from "./VideoDetails";


const WatchVideoPage = () => {
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState(null);

    const getVideoDetails = async() => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS + searchParams.get("v"));
        const json= await data.json();
        console.log(json.items[0], "vedio Details");
        setVideoDetails(json.items[0]);
    }

    useEffect(()=>{
        getVideoDetails();

    },[searchParams.get("v")])


    return (
        <div className="mx-10 my-5 w-full grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <iframe 
                    width="100%" 
                    height="420" 
                    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowFullscreen>                    
                </iframe>
                {videoDetails && <VideoDetails videoDetails={videoDetails}/>}
                
                <CommentContainer/>
            </div>
            <div>
                Suggestions
            </div>
        </div>
    );
}

export default WatchVideoPage;