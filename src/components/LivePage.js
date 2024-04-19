import React, { useEffect, useState } from "react"
import {SEARCH_LIST_API} from "../utils/constants";
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
    const data = await fetch(SEARCH_LIST_API + "live");
    const json = await data.json();
    setLiveVideosList(json.items);
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
