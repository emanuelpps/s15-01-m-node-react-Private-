/* eslint-disable react/prop-types */
import { useState } from "react";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={`absolute rounded-lg w-[80%] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2C3E50] z-50`}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
