require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {liveChatId} = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_KEY}&liveChatId=${liveChatId}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let liveChatList = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...liveChatList}),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };