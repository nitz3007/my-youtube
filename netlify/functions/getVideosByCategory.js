require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
    try {
      const { videoCategoryId, pageToken } = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_GOOGLE_API_KEY}&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=24&videoCategoryId=${videoCategoryId}`
      if(pageToken) {
        apiUrl += `&pageToken=${pageToken}`
      }
    
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
      console.log(response.data, "next page response")
      let nextPageVideoList = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...nextPageVideoList}),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };