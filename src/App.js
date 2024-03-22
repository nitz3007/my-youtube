import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import MainContainer from "./components/MainContainer";
import WatchVideoPage from "./components/WatchVideoPage";

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
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  )
}

export default App;