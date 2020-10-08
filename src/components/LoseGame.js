import React from "react";
import "../styles/LoseGame.css";

function LoseGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <div class="win__title">Sorry,</div>
      <div class="win__title">Try again!</div>
      <button id="btn__play-game" onClick={playAgain}>
        Play Again!
      </button>
    </div>
  );
}

export default LoseGame;
