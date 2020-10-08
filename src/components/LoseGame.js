import React from "react";

function LoseGame({ playAgain }) {
  return (
    <div id="win-game__container">
      <h1>Sorry, please try again!</h1>
      <button onClick={playAgain}>Play Again!</button>
    </div>
  );
}

export default LoseGame;
