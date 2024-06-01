import { useState } from "react";
import FilterMenu from "./features/FilterMenu";
import HomePage from "./features/HomePage";
import Details from "./features/Details";

function Home() {
  const [pageSelector, setPageSelector] = useState(1);
  return (
    <div>
      <FilterMenu />
      {pageSelector === 1 ? <HomePage /> : <Details />}
    </div>
  );
}

export default Home;
