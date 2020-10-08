import React from "react";
import "../styles/LoseGame.css";

function LoseGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <div className="win__title">Sorry,</div>
      <div className="win__title">Try again!</div>
      <button id="btn__play-game" onClick={playAgain}>
        Play Again!
      </button>
    </div>
  );
}

export default LoseGame;
