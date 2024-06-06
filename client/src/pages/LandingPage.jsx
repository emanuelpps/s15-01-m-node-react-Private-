import Banner from "./landing/Banner";
import BannerOptions from "./landing/BannerOptions";
import JoinBanner from "./landing/JoinBanner";
import Presentation from "./landing/Presentation";
import Tendency from "./landing/Tendency";
import UploadMovie from "./landing/UploadMovie";

const HomePage = () => {
  return (
    <div className="bg-primary-500 w-full min-h-screen">
      <Presentation />
      <Banner />
      <BannerOptions />
      <Tendency />
      <UploadMovie />
      <JoinBanner />
    </div>
  );
};
export default HomePage;
