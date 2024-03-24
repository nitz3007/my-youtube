import YoutubeLogo from '../assets/logo-youtube.png';
import ProfileImage from '../assets/profile-img.jpg';
import SearchIcon from '../assets/search-icon.png';
import MenuIcon from '../assets/menu-icon.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState, useEffect } from 'react';
import { SEARCH_SUGGESTION_API } from '../utils/constants';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    useEffect(()=>{
        //Debouncing
        const timer = setTimeout(()=> {
            getSearchSuggestions();
        }, 200);
        
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async() => {
        const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return <nav className='grid grid-cols-12'>
        <div className='flex col-span-2 mx-4'>
            <button onClick={toggleMenuHandler} className='p-2'>
                <img className='h-6' src={MenuIcon} alt='menu'/>
            </button>
            <img className='h-16' src={YoutubeLogo} alt='youtube-logo'/>
        </div>
        <div className='flex col-span-9 justify-center'>
            <div className='relative flex items-center justify-center'>
                <input 
                    className='border border-slate-400 w-96 rounded-l-full py-1 px-2'
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onFocus={()=>{setShowSuggestions(true)}}
                    onBlur={()=>{setShowSuggestions(false)}}
                />
                <button className='px-3 py-1 border border-slate-400 rounded-r-full'>
                    <img className='h-6' src={SearchIcon} alt='search'/>
                </button>
                
                {showSuggestions && searchSuggestions.length> 0 && 
                <ul className='absolute w-96 py-4 left-0 top-[3.25rem] bg-white border rounded-xl shadow-lg'>
                    {searchSuggestions?.map(suggestion => 
                        <li className='flex py-1 px-6 font-semibold hover:bg-[#dddddd]'>
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