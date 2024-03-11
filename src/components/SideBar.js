import HomeIcon from '../assets/home-icon.png';
import ShortsIcon from '../assets/shorts-icon.png';
import SubscriptionIcon from '../assets/subscription-icon.png';
import MusicIcon from '../assets/music-icon.webp';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //early return
    if(!isMenuOpen) {
        return null;
    }

    return <div className="w-52">
       <ul className='p-4'>
            <li className='flex focus:bg-[#ebeef0] hover:bg-[#dddddd] p-2 rounded-md text-sm font-semibold'>
                <img src={HomeIcon} alt='home-icon' className='w-6 mr-5'/>
                Home
            </li>
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
    </div>
}

export default SideBar;