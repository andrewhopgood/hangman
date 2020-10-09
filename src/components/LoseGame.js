import React from "react";
import "../styles/LoseGame.css";
import PlayGameButton from "../components/PlayGameButton";
import EndGameMessage from "../components/EndGameMessage";

function LoseGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <EndGameMessage lineOne="Sorry," lineTwo="try again" />

      <PlayGameButton text="Play Again" play={playAgain} />
    </div>
  );
}

export default LoseGame;
