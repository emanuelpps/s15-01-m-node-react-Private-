import { useState } from "react";
import HomePage from "./features/HomePage";
import Details from "./features/Details";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  const [pageSelector, setPageSelector] = useState(1);
  return (
    <>
      <Sidebar />
      <div className="flex flex-col justify-centerr w-full bg-[#2C3E50]">
        {pageSelector === 1 ? <HomePage /> : <Details />}
      </div>
    </>
  );
}

export default Home;
