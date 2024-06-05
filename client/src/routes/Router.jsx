import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import LandingPage from "../pages/LandingPage";
import Suscription from "../pages/suscription/Suscription";
import Home from "../pages/home/Home";
import Details from "../pages/home/features/Details";

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
        element: <Home/>,
        errorElement: <ErrorPage />,
      },      {
        path: "/details/:id",
        element: <Details/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/suscription",
    element: <Suscription />,
    children: [{}],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
