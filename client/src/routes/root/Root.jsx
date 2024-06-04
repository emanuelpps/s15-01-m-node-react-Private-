import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const Root = () => {
  const location = useLocation();
  const hideNavBarRoutes = ["/home", "/detail"];
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen w-full">
      {shouldShowNavBar && <NavBar />}
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Root;
