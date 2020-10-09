import React from "react";
import "../styles/WinGame.css";
import PlayGameButton from "../components/PlayGameButton";
import EndGameMessage from "../components/EndGameMessage";

function WinGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <EndGameMessage lineOne="Nice!" lineTwo="You got it!" />
      <PlayGameButton text="Play Again" play={playAgain} />
    </div>
  );
}

export default WinGame;
