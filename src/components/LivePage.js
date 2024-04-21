import React, { useEffect, useState } from "react"
import {LIVE_SEARCH_LIST_API} from "../utils/constants";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const LivePage = (props) => {
  const [liveVideosList, setLiveVideosList] = useState([]);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
    getLiveBroadcastList();
  },[]);

  const getLiveBroadcastList = async() => {
    const data = await fetch(LIVE_SEARCH_LIST_API);
    const json = await data.json();
    // const liveStreamingVideos = json.filter(video => video)
    setLiveVideosList(json.items);
    console.log(json, "search live");
  }

  return (
    <div className='mx-24 my-10'>
      {liveVideosList.map(video => (
          <Link to={"/watchLive?v="+video.id.videoId}>
              <SearchVideoCard key={video.id.videoId} details={video.snippet}/>
          </Link>
      ))}
    </div>
  )
};

export default LivePage;
