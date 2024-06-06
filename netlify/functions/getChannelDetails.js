require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {channelId} = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=${process.env.REACT_APP_GOOGLE_API_KEY}&id=${channelId}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let channelDetails = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...channelDetails }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };