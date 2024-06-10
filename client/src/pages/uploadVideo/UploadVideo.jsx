import Table from "./Table/Table";
import Upload from "./Upload/Upload";

function UploadVideo() {
  return (
    <div className="h-screen flex flex-col w-full bg-[#2C3E50] items-center overflow-x-hidden">
      <Table />
      <Upload />
    </div>
  );
}

export default UploadVideo;
