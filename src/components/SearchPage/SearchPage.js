import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from "react-router-dom";
import { SEARCH_LIST_API } from '../../utils/constants';
import SearchVideoCard from './SearchVideoCard';

const SearchPage = () => {
    // eslint-disable-next-line
    const [searchParam] = useSearchParams();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        const getSearchResults = async() => {
            const data = await fetch(SEARCH_LIST_API + `?query=${searchParam.get('search_query')}`);
            const json = await data.json();
            setSearchResult(json.items);
        }
        getSearchResults();
    },[searchParam]);

    return (
        <div className='mx-24 my-10'>
            {searchResult.map(video => (
                <Link to={"/watch?v="+video.id.videoId}>
                    <SearchVideoCard key={video.id.videoId} details={video.snippet}/>
                </Link>
            ))}
        </div>
    );
}

export default SearchPage;
