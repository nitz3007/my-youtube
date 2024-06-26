import { useSearchParams } from "react-router-dom";
import CommentContainer from "../CommentSection/CommentContainer";
import {YOUTUBE_VIDEO_DETAILS} from '../../utils/constants';
import { useEffect, useState } from "react";
import VideoDetails from "./VideoDetails";
import LiveChatContainer from "../LiveChat/LiveChatContainer";
import VideoFooter from "./VideoFooter";


const WatchVideoPage = () => {
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [liveChatId, setLiveChatId] = useState();
    const [commentCount, setCommentCount] = useState("");
    const [isLive, setIsLive] = useState(null);

    const videoId = searchParams.get("v");

    useEffect(()=>{
        const getVideoDetails = async() => {
            const data = await fetch(YOUTUBE_VIDEO_DETAILS + `?videoId=${videoId}`);
            const json= await data.json();
            
            setVideoDetails(json.items[0]);
            setCommentCount(json?.items[0].statistics.commentCount);
            if(json?.items[0].snippet?.liveBroadcastContent === "live"){
                setIsLive(true);
                setLiveChatId(json?.items[0].liveStreamingDetails?.activeLiveChatId);
            }
            
        }

        getVideoDetails();

    },[videoId])


    return (
        <div className="mx-10 my-5 w-full">
            <div className="grid grid-cols-3 gap-4 h-[32rem] relative justify-stretch">
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
                    {videoDetails && <VideoFooter title={videoDetails?.snippet?.title} channelId={videoDetails?.snippet?.channelId}/>} 
                    {videoDetails && <VideoDetails videoDetails={videoDetails}/>}
                    {!isLive && <CommentContainer commentCount={commentCount} videoId={searchParams.get("v")}/>}  
                </div>
                <div className="fixed left-2/3 mx-4" style={{width: "-webkit-fill-available"}}>
                    {isLive && <LiveChatContainer liveChatId={liveChatId}/>} 
                </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    
                </div>
                
            </div> */}
            
        </div>
    );
}

export default WatchVideoPage;