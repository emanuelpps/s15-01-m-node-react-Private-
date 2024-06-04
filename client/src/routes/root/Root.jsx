import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";

const Root = () => {
  const location = useLocation();
  const hideNavBarRoutes = ["/home", "/detail"];
  const hideSidebarRoutes = ["/", "/login", "/register", "/suscription"];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen w-full">
      {shouldShowNavBar && <NavBar />}

      {shouldShowSidebar && <Sidebar />}

      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Root;
