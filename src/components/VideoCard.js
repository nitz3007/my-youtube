import React from 'react';
import { time_ago } from '../utils/util';

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails, publishedAt} = snippet;
    
    

    return (
        <div className='w-96 mx-2 my-4'>
            <img className='rounded-xl mb-2 w-full object-cover bg-transparent' src={thumbnails.medium.url} alt='thumbnail'/>
            <h1 className='font-semibold text-[#0F0F0F]'>{title}</h1>
            <h2 className='text-sm text-[#606060]'>{channelTitle}</h2>
            <span className='flex text-sm text-[#606060]'>
                <p>{Math.floor(statistics.viewCount/1000) + 'K views'}</p>
                <p className='mx-2'>|</p>
                <p>{time_ago(publishedAt)}</p>
            </span>
        </div>
    );
}

export default VideoCard;
