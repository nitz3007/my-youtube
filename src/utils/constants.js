export const YOUTUBE_VIDEO_LIST_API = '/.netlify/functions/getVideos'
export const YOUTUBE_CATEGORYWISE_VIDEO_LIST_API = '/.netlify/functions/getVideosByCategory';
export const YOUTUBE_VIDEO_DETAILS = '/.netlify/functions/getVideoDetails';
export const SEARCH_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const SEARCH_LIST_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key='+ process.env.REACT_APP_GOOGLE_API_KEY + '&q=';
export const VIDEO_CATEGORY_LIST = '/.netlify/functions/getYTVideoCategories';
export const CHANNEL_DETAILS = "/.netlify/functions/getChannelDetails";
export const LIVE_SEARCH_LIST_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&type=video&key='+ process.env.REACT_APP_GOOGLE_API_KEY + '&eventType=live';
export const YOUTUBE_LIVE_VIDEO_DETAILS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&key='+process.env.REACT_APP_GOOGLE_API_KEY + '&id=';
export const YOUTUBE_LIVE_CHAT_LIST = "https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&maxResults=50&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&liveChatId=";
export const YOUTUBE_SEND_LIVE_CHAT = "https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
export const COMMENT_THREAD_LIST = ".netlify/functions/getCommentThreadList";
export const COMMENT_REPLY_LIST = "https://www.googleapis.com/youtube/v3/comments?part=snippet&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&parentId=";