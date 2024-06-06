require("dotenv").config();

const axios = require("axios");
exports.handler = async (event, context) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );
  
      let categoryList = response.data;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ ...categoryList}),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error }),
      };
    }
  };