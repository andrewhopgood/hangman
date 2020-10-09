import React from "react";
import "../styles/EndGameMessage.css";

function EndGameMessage({ lineOne, lineTwo }) {
  return (
    <>
      <div className="end-game__message">{lineOne}</div>
      <div className="end-game__message">{lineTwo}</div>
    </>
  );
}

export default EndGameMessage;
