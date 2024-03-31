
import { time_ago } from "../utils/util";
import CHANNEL_PROFILE from '../assets/channel_profile.jpeg';

const SearchVideoCard = ({details}) => {
    return <div className="flex my-4 active:border active:rounded-xl active:bg-[#f7f7f7]">
        <img className="w-5/12 rounded-xl  hover:transition-transform hover:scale-95 delay-100 duration-200" src={details.thumbnails.medium.url} alt="thumbnail"></img>
        <div className="w-7/12 px-4">
            <h1 className="text-lg text-[#0f0f0f]">{details.title}</h1>
            <h2 className="text-xs text-[#606060]">{time_ago(details.publishedAt)}</h2>
            <span className="flex my-4 items-center">
                <img alt="profile" className="rounded-full w-6 mr-2" src={CHANNEL_PROFILE}/>
                <h3 className="text-xs text-[#606060] font-semibold">{details.channelTitle}</h3>
            </span>
            
            <text className="text-xs text-[#606060]">{details.description}</text>
        </div>
    </div>
}

export default SearchVideoCard;