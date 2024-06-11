import PropTypes from "prop-types";
import classNames from "classnames";

const buttonStyles = {
  primary:
    "bg-secondary-600 hover:bg-secondary-100 text-white hover:text-primary-200 font-semibold py-2 px-6 rounded-full font-thin",
  secondary:
    "bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-6 rounded-full",
  tertiary:
    "bg-transparent hover:bg-primary-100 text-white font-semibold py-2 px-6 rounded-full",
  quaternary:
    "bg-white shadow-xl hover:bg-gray-300 text-black font-semibold py-2 px-6 rounded-full",
  // se pueden agregar más variantes acá
};

const Buttons = ({
  variant = "primary",
  children,
  onClick = () => {},
  fullWidth = false,
}) => {
  const buttonClass = classNames(buttonStyles[variant], {
    "w-full": fullWidth,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Buttons.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "quaternary"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
};

export default Buttons;
