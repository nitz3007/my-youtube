# Youtube Clone Application

This project is a small-scale clone of Youtube with following Key features:
- Home page with a list of most popular youtube videos with Infilte scroll feature.
- Video category Panel to get videos falling under a certain youtube video category.
- Search feature to search videos aided with search suggestions while the user is typing.
- A global side bar to switch pages.
- Watch Video Page with video & channel details along with comment section.
- Live Videos along with live chat.

Note: We've used **Youtube Data APIs** provided by **Google for Developers**.

## Performance enhancing concepts used while building this app
- Global State Management using Redux toolkit.
- Infinite scroll feature.
- API Polling for Live Chat.
- Debouncing for getting search suggestions.
- Netlify server functions to hide API Keys.

## Live Project Link 
[My Youtube](https://nitz-youtube-clone.netlify.app/)

## Reference Links
- [Youtube API Explorer](https://developers.google.com/youtube/v3/docs/?apix=true)
- [Google Cloud console to create Google API Key](https://console.cloud.google.com/)
- [How to implement netlify functions to hide apis](https://www.freecodecamp.org/news/hide-api-keys-in-frontend-apps-using-netlify-functions/)
  
## To run the application locally
1. Create an env file and store the newly generated Google API Key in this file.
    ```
    REACT_APP_GOOGLE_API_KEY = <Google API Key>
    ```
2. Install the required dependencies using command: `npm install`
3. To run the application along with netlify server functions, use command: `npm run dev`

Happy Coding!

  
  
