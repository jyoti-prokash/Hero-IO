import { createBrowserRouter } from "react-router";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home";
import AllApps from "../../Pages/AllApps";
import ErrorPage from "../../Pages/ErrorPage";
import AppDetails from "../AppDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/all-apps",
        element: <AllApps></AllApps>
    },
    {
      path: "/all-apps/:id",
      element: <AppDetails></AppDetails>,
      loader: async ({ params }) => {
        const res = await fetch("/apps.json");
        const data = await res.json();
        const singleApp = data.find(
          (app) => app.id === parseInt(params.id)
        );
        return singleApp;
      }
    }
]
  },
]);