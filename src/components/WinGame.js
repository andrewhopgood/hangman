import React from "react";
import "../styles/WinGame.css";

function WinGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <h1>You Won!</h1>
      <button onClick={playAgain}>Play Again!</button>
    </div>
  );
}

export default WinGame;
