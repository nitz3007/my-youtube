require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
      const {query} = event.queryStringParameters;
      let apiUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
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