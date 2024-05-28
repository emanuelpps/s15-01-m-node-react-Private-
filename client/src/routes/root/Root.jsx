import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Root;
