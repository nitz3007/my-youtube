require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {query} = event.queryStringParameters;
      let apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${query}`
    try {
      let response = await axios.get(
        apiUrl,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let searchSuggestions = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...searchSuggestions }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };