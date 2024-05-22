import React, { useCallback, useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_LIST_API, YOUTUBE_CATEGORYWISE_VIDEO_LIST_API } from '../../utils/constants';
import VideoCard from '../Global/VideoCard';
import VideoCardShimmer from '../Global/VideoCardShimmer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

    const selectedCategory = useSelector(store => store.app.selectedVideoCategory);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPageToken, setNextPageToken] = useState(""); 
    const [totalResults, setTotalResults] = useState(0);
    
    useEffect(()=>{
        const getVideos = async () => {
            setIsLoading(true);
            const data = await fetch(selectedCategory.id === 'all' ? YOUTUBE_VIDEO_LIST_API : YOUTUBE_CATEGORYWISE_VIDEO_LIST_API+selectedCategory.id);
            const json = await data.json();
            setVideos(json.items);
            setIsLoading(false);
            setNextPageToken(json.nextPageToken);
            setTotalResults(json.pageInfo.totalResults);
        }

        getVideos();
    },[selectedCategory]);

    const fetchVideoData = useCallback(async()=> {
        if(totalResults > videos.length) {
            if(isLoading) return;
            setIsLoading(true);
            const data = await fetch(selectedCategory.id === 'all' ? YOUTUBE_VIDEO_LIST_API + `&pageToken=${nextPageToken}`  : YOUTUBE_CATEGORYWISE_VIDEO_LIST_API+selectedCategory.id + `&pageToken=${nextPageToken}`);
            const json = await data.json();
            setVideos(prevItems => ([...prevItems, ...json.items]));
            setNextPageToken(json.nextPageToken)
            setIsLoading(false);
            console.log(videos,"video items");
        }
    },[nextPageToken, isLoading]);

    useEffect(()=>{
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
            if(scrollTop + clientHeight >= scrollHeight - 20) {
                fetchVideoData();
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[fetchVideoData])

    if(isLoading) {
        return  <div className='flex flex-wrap justify-center'>
            {[...Array(10)].map((e,i)=>{
                return <VideoCardShimmer key={i}/>
            })}
        </div>
    }
    return (
        <div className='flex flex-wrap justify-center'>
            {videos?.length > 0 && 
                videos.map((video) => (
                    <Link key={video.id} to={"/watch?v="+video.id}>
                        <VideoCard info={video}/>
                    </Link>
                ))
            }
        </div>
    );
}

export default VideoContainer;
