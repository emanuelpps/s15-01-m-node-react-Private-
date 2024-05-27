import PropTypes from "prop-types";
import classNames from "classnames";

const buttonStyles = {
  primary:
    "bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-full",
  secondary:
    "bg-contrast-500 hover:bg-contrast-700 text-white font-semibold py-2 px-6 rounded-full",
  tertiary:
    "bg-transparent hover:bg-primary-100 text-primary-500 font-semibold py-2 px-6 rounded-full",
  // se pueden agregar más variantes acá
};

const Buttons = ({ variant, children, onClick }) => {
  const buttonClass = classNames(buttonStyles[variant]);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Buttons.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Buttons.defaultProps = {
  onClick: () => {},
};

export default Buttons;
