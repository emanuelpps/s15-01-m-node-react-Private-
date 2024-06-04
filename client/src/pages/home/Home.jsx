import HomePage from "./features/HomePage";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <>
    <div className="flex flex-col justify-centerr w-full bg-[#2C3E50]">
      <HomePage />
      <Sidebar />
    </div>
    </>
  );
}

export default Home;
