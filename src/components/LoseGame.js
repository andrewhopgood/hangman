import React from "react";
import "../styles/LoseGame.css";
import PlayGameButton from "../components/PlayGameButton";

function LoseGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <div className="win__title">Sorry,</div>
      <div className="win__title">Try again!</div>
      <PlayGameButton text="Play Again" play={playAgain} />
    </div>
  );
}

export default LoseGame;
