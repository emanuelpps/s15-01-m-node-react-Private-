import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
