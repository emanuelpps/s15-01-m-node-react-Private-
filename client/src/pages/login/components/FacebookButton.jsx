import FacebookIcon from "../../../assets/icons/facebook.svg";

function FacebookButton(prop) {
  return (
    <button className="bg-gray-100 py-2 px-12 flex items-center gap-2">
      <img src={FacebookIcon} className="w-4" />
      {prop.label} con Facebook
    </button>
  );
}

export default FacebookButton;
