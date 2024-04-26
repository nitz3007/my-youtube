import Body from "./components/Global/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import MainContainer from "./components/HomePage/MainContainer";
import WatchVideoPage from "./components/WatchVideo/WatchVideoPage";
import SearchPage from "./components/SearchPage/SearchPage";
import LivePage from "./components/LivePage/LivePage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchVideoPage/>
    },
    {
      path: "search",
      element: <SearchPage/>
    },
    {
      path: "live",
      element: <LivePage/>,
    },
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  )
}

export default App;