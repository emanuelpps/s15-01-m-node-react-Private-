import { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
function Upload() {
  const [asset, setAsset] = useState("");

  const handleAsset = (e) => {
    setAsset(e.target.files[0].name);
  };

  return (
    <div className="flex items-start justify-start text-white ml-20  bg-[#2C3E50] mt-10">
      <div className="flex flex-col items-center justify-between input-bg-gradient  p-20">
        <label
          htmlFor="file"
          className="flex flex-col justify-center items-center cursor-pointer "
        >
          <h3 className="text-white">{asset ? asset : <RiUpload2Line />}</h3>
          <div className="bg-transparent">
            <span>Subir video</span>
          </div>
          <input
            id="file"
            type="file"
            className="hidden h-400px"
            onChange={handleAsset}
          />
        </label>
      </div>
    </div>
  );
}

export default Upload;
