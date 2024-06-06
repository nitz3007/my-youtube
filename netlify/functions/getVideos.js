require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {pageToken } = event.queryStringParameters;
      let apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=24&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      if(pageToken) {
        apiUrl += `&pageToken=${pageToken}`
      }
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let videoList = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...videoList }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };