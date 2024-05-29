import SuscriptionFooter from "./SuscriptionFooter";
import SuscriptionHeader from "./SuscriptionHeader";
import SuscriptionSelection from "./SuscriptionSelection";

function Suscription() {
  return (
    <div
      id="suscription-container"
      className="flex flex-col w-full bg-[#2C3E50] justify-center items-center bg"
    >
      <SuscriptionHeader />
      <SuscriptionSelection />
      <SuscriptionFooter />
    </div>
  );
}

export default Suscription;
