import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/login",
    element: <Login />,
    children: [{}],
  },
  {
    path: "/register",
    element: <Register />,
    children: [{}],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
