import HomeIcon from '../../assets/home-icon.png';
import ShortsIcon from '../../assets/shorts-icon.png';
import SubscriptionIcon from '../../assets/subscription-icon.png';
import MusicIcon from '../../assets/music-icon.webp';
import LiveIcon from '../../assets/live-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '../../assets/menu-icon.png';
import { toggleMenu } from '../../utils/appSlice';
import YoutubeLogo from '../../assets/logo-youtube.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    //early return
    if(!isMenuOpen) {
        return null;
    }

    return (
    <>
        <div className='z-10 absolute inset-0 bg-black opacity-50' onClick={toggleMenuHandler}>

        </div>
        <aside className="w-52 transform top-0 left-0 w-64 fixed bg-white h-full z-30">
            <span className='flex col-span-2 mx-4'>
                <button onClick={toggleMenuHandler} className='p-2'>
                    <img className='h-6' src={MenuIcon} alt='menu'/>
                </button>
                <img className='h-16' src={YoutubeLogo} alt='youtube-logo'/>
            </span>
            <ul className='p-4'>
                    <Link to="/">
                        <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold'>
                            <img src={HomeIcon} alt='home-icon' className='w-6 mr-5'/>
                            Home
                        </li>
                    </Link>
                    <Link to="/live">
                        <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold relative'>
                            <img src={LiveIcon} alt='home-icon' className='w-6 mr-5'/>
                            Live
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                        </li>
                    </Link>
                    <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold'>
                        <img src={ShortsIcon} alt='shorts-icon' className='w-6 mr-5'/>
                        Shorts
                    </li>
                    <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold'>
                        <img src={SubscriptionIcon} alt='shorts-icon' className='w-6 mr-5'/>
                        Subscriptions
                    </li>
                    <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold'>
                        <img src={MusicIcon} alt='shorts-icon' className='w-6 h-6 mr-5'/>
                        Youtube Music
                    </li>
            </ul>
        </aside>
    </>
    );

}

export default SideBar;