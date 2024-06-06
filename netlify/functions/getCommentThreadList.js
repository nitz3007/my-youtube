require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {videoId} = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&maxResults=20&key=${process.env.REACT_APP_GOOGLE_API_KEY}&videoId=${videoId}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let commentThread = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...commentThread }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };