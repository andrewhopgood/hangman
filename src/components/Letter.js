import React, { useState } from "react";
import "../styles/Letter.css";

function Letter({ name, searchForLetter }) {
  const [isActive, setIsActive] = useState(false);
  const [btnStyle, setBtnStyle] = useState(["#F1D302", "#292929"]);

  const handleClick = (e) => {
    setIsActive(true);
    setBtnStyle(["#537895", "none"]);

    searchForLetter(e.target.value);
  };

  return (
    <div>
      <button
        id="btn__letter"
        onClick={handleClick}
        disabled={isActive}
        value={name}
        style={{ backgroundColor: btnStyle[0], boxShadow: btnStyle[1] }}
      >
        {name}
      </button>
    </div>
  );
}

export default Letter;
