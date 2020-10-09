import React from "react";
import "../styles/WinGame.css";
import PlayGameButton from "../components/PlayGameButton";

function WinGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <div className="win__title">Nice,</div>
      <div className="win__title">You Got It!</div>
      <PlayGameButton text="Play Again" play={playAgain} />
    </div>
  );
}

export default WinGame;
