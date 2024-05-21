import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_LIST_API, YOUTUBE_CATEGORYWISE_VIDEO_LIST_API } from '../../utils/constants';
import VideoCard from '../Global/VideoCard';
import VideoCardShimmer from '../Global/VideoCardShimmer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

    const selectedCategory = useSelector(store => store.app.selectedVideoCategory);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        getVideos();
    },[selectedCategory]);

    const getVideos = async () => {
        const data = await fetch(selectedCategory.id === 'all' ? YOUTUBE_VIDEO_LIST_API : YOUTUBE_CATEGORYWISE_VIDEO_LIST_API+selectedCategory.id);
        const json = await data.json();
        setVideos(json.items);
        setIsLoading(false);
    }

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
