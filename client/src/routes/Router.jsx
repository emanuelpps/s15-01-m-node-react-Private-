import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import LandingPage from "../pages/LandingPage";
import Suscription from "../pages/suscription/Suscription";
import Home from "../pages/home/Home";
import Details from "../pages/home/features/Details";
import UserProfile from "../pages/profile/UserProfile";
import UploadVideo from "../pages/uploadVideo/UploadVideo";
import Analysis from "../pages/analysis/Analysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/suscription",
        element: <Suscription />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/upload-video",
        element: <UploadVideo />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/analisis",
        element: <Analysis />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
