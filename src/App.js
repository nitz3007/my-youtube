import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import MainContainer from "./components/MainContainer";
import WatchVideoPage from "./components/WatchVideoPage";
import SearchPage from "./components/SearchPage";

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
    }
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