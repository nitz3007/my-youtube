import React, { useCallback, useEffect, useState, useRef } from 'react';
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
    const loaderRef = useRef(null);

    const fetchVideoData = useCallback(async()=> {
        if(totalResults > videos.length && nextPageToken) {
            if(isLoading) return;
            setIsLoading(true);
            const data = await fetch(selectedCategory.id === 'all' ? YOUTUBE_VIDEO_LIST_API+`?pageToken=${nextPageToken}` : YOUTUBE_CATEGORYWISE_VIDEO_LIST_API + `?videoCategoryId=${selectedCategory.id}&pageToken=${nextPageToken}`);
            const json = await data.json();
            setVideos(prevItems => ([...prevItems, ...json.items]));
            setNextPageToken(json.nextPageToken)
            setIsLoading(false);
        }
    },[isLoading, nextPageToken]);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                fetchVideoData();
            }
        });
      
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
      
        return () => {
            if (loaderRef.current) {
              observer.unobserve(loaderRef.current);
            }
        };
    },[fetchVideoData]);

    useEffect(()=>{
        const getVideos = async () => {
            setIsLoading(true);
            const data = await fetch(selectedCategory.id === 'all' ? YOUTUBE_VIDEO_LIST_API : YOUTUBE_CATEGORYWISE_VIDEO_LIST_API +`?videoCategoryId=${selectedCategory.id}`);
            const json = await data.json();
            setVideos(json.items);
            setNextPageToken(json.nextPageToken);
            setTotalResults(json.pageInfo.totalResults);
            setIsLoading(false);
        }

        getVideos();
    },[selectedCategory]);
    
    return (
        <div>  
            <div className='flex flex-wrap justify-center'>
                {isLoading ?
                    [...Array(12)].map((e,i)=>{
                        return <VideoCardShimmer key={i}/>
                    }) :
                    videos?.length > 0 && 
                    videos.map((video) => (
                        <Link key={video.id} to={"/watch?v="+video.id}>
                            <VideoCard info={video}/>
                        </Link>
                    ))
                }
             </div>
             <div  ref={loaderRef}>{isLoading && <div>Loading...</div>}</div>
        </div>
    );
}

export default VideoContainer;
