require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {parentId} = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/comments?part=snippet&key=${process.env.REACT_APP_GOOGLE_API_KEY}&parentId=${parentId}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let replyList = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...replyList }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };