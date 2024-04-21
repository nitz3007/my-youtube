

export const YOUTUBE_VIDEO_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=' + GOOGLE_API_KEY;
export const YOUTUBE_CATEGORYWISE_VIDEO_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=' + GOOGLE_API_KEY + '&videoCategoryId=';
export const YOUTUBE_VIDEO_DETAILS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&key='+GOOGLE_API_KEY + '&id=';
export const SEARCH_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const SEARCH_LIST_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key='+ GOOGLE_API_KEY + '&q=';
export const VIDEO_CATEGORY_LIST = 'https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=' + GOOGLE_API_KEY;
export const CHANNEL_DETAILS = "//www.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=" + GOOGLE_API_KEY + "&id=";
export const LIVE_SEARCH_LIST_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&type=video&key='+ GOOGLE_API_KEY + '&eventType=live';
export const YOUTUBE_LIVE_VIDEO_DETAILS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&key='+GOOGLE_API_KEY + '&id=';
export const YOUTUBE_LIVE_CHAT_LIST = "https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&maxResults=50&key=" + GOOGLE_API_KEY + "&liveChatId="