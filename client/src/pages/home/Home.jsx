import { useState } from "react";
import HomePage from "./features/HomePage";
import Details from "./features/Details";
import HeaderMenu from "../../components/header/HeaderMenu";

function Home() {
  const [pageSelector, setPageSelector] = useState(1);
  const [filterGenre, setFilterGenre] = useState("");
  return (
    <div className="flex flex-col justify-centerr h-screen w-full bg-[#2C3E50]">
      <HeaderMenu />
      {pageSelector === 1 ? <HomePage /> : <Details />}
    </div>
  );
}

export default Home;
