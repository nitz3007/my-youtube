import YoutubeLogo from '../../assets/logo-youtube.png';
import ProfileImage from '../../assets/profile-img.jpg';
import SearchIcon from '../../assets/search-icon.png';
import MenuIcon from '../../assets/menu-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import React, { useState, useEffect } from 'react';
import { SEARCH_SUGGESTION_API, SEARCH_LIST_API } from '../../utils/constants';
import { cacheResults } from '../../utils/searchSlice';
import { useNavigate, Link } from 'react-router-dom';


const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        //Debouncing
        const timer = setTimeout(()=> {
            if(searchCache[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }   
        }, 200);
        
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async() => {
        const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const selectSearchSuggestion = (e) => {
        setSearchQuery(e.target.textContent);
        navigate("/search?search_query="+searchQuery);
    }

    return <nav className='grid grid-cols-12'>
        <div className='flex col-span-2 mx-4'>
            <button onClick={toggleMenuHandler} className='p-2'>
                <img className='h-6' src={MenuIcon} alt='menu'/>
            </button>
            <Link to={"/"}>
                <img className='h-16' src={YoutubeLogo} alt='youtube-logo'/>
            </Link>
        </div>
        <div className='flex col-span-9 justify-center'>
            <div className='relative flex items-center justify-center'>
                <input 
                    type="search"
                    className='border border-slate-400 w-96 rounded-l-full py-1 px-2'
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onFocus={()=>{setShowSuggestions(true)}}
                    onBlur={()=>{setShowSuggestions(false)}}
                    onKeyDown={(e)=>{e.key==='Enter' && selectSearchSuggestion(e)}}
                />
                <Link 
                    className='px-3 py-1 border border-slate-400 rounded-r-full'
                    to={"/search?search_query="+searchQuery}
                >
                    <img className='h-6' src={SearchIcon} alt='search'/>
                </Link>
                
                {showSuggestions && searchSuggestions.length> 0 && 
                <ul className='absolute w-96 py-4 left-0 top-[3.25rem] bg-white border rounded-xl shadow-lg z-10'>
                    {searchSuggestions?.map(suggestion => 
                        <li className='flex py-1 px-6 font-semibold hover:bg-[#dddddd] w-full' onMouseDown={(e)=>{selectSearchSuggestion(e)}}>
                                {suggestion}
                        </li>)}
                </ul>}
            </div>
        </div>  
    
        <div className='col-span-1 flex items-center'>
            <img className='h-10' src={ProfileImage} alt='profile'/>
        </div>
    </nav>
}

export default Header;