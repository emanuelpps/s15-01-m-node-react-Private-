import GoogleIcon from "../../../assets/icons/google.svg";

function GoogleButton(prop) {
  return (
    <button className="bg-gray-100 py-2 px-12 flex items-center gap-2">
      <img src={GoogleIcon} className="w-4" label={prop} />
      {prop.label} con Google
    </button>
  );
}

export default GoogleButton;
