import React from "react";
import "../styles/WinGame.css";

function WinGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <div className="win__title">Nice,</div>
      <div className="win__title">You Got It!</div>
      <button id="btn__play-game" onClick={playAgain}>
        Play Again!
      </button>
    </div>
  );
}

export default WinGame;
