require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {videoId} = event.queryStringParameters;
      let apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,liveStreamingDetails&key=${process.env.REACT_APP_GOOGLE_API_KEY}&id=${videoId}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let videoDetails = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...videoDetails }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };