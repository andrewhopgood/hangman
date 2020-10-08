import React, { useState } from "react";
import "../styles/Letter.css";

function Letter({ name, searchForLetter }) {
  const [isActive, setIsActive] = useState(false);
  const [btnColor, setBtnColor] = useState("#F1D302");

  const handleClick = (e) => {
    setIsActive(true);
    setBtnColor("#235789");
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
