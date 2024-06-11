import Table from "./Table/Table";
import Upload from "./Upload/Upload";

function UploadVideo() {
  return (
    <div className="h-screen flex flex-col w-[360px] md:w-full bg-[#2C3E50] items-center md:overflow-x-hidden max-w-full md:max-w-full overflow-x-auto md:pl-[16rem]">
      <Table />
      <Upload />
    </div>
  );
}

export default UploadVideo;
