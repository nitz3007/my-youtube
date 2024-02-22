import YoutubeLogo from '../assets/logo-youtube.png';
import ProfileImage from '../assets/profile-img.jpg';
import SearchIcon from '../assets/search-icon.png';
import MenuIcon from '../assets/menu-icon.png';
const Header = () => {
    return <div className='grid grid-cols-12 shadow-md'>
        <div className='flex col-span-2 mx-4'>
            <button>
                <img className='h-6' src={MenuIcon} alt='menu'/>
            </button>
            <img className='h-16' src={YoutubeLogo} alt='youtube-logo'/>
        </div>
        
        <div className='col-span-9 flex items-center justify-center'>
            <input className='border border-slate-400 w-96 rounded-l-full py-1 px-2'/>
            <button className='px-3 py-1 border border-slate-400 rounded-r-full'>
                <img className='h-6' src={SearchIcon} alt='search'/>
            </button>
        </div>
        <div className='col-span-1 flex items-center'>
            <img className='h-10' src={ProfileImage} alt='profile'/>
        </div>
    </div>
}

export default Header;