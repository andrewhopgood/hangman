import React, { useState } from "react";
import "../styles/Letter.css";

function Letter({ name, searchForLetter }) {
  const [isActive, setIsActive] = useState(false);
  const [btnColor, setBtnColor] = useState("#eb9012");

  const handleClick = (e) => {
    setIsActive(true);
    setBtnColor("#e3e3e3");
    searchForLetter(e.target.value);
  };

  return (
    <div>
      <button
        id="btn__letter"
        onClick={handleClick}
        disabled={isActive}
        value={name}
        style={{ backgroundColor: btnColor }}
      >
        {name}
      </button>
    </div>
  );
}

export default Letter;
