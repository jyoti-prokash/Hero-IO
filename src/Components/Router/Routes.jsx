import { createBrowserRouter } from "react-router";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [{
        path: "/",
        element: <Home></Home>
    }]
  },
]);