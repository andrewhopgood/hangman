import React from "react";

function PlayGame({ startGame }) {
  const play = () => {
    startGame();
  };

  return (
    <div>
      <button onClick={play}>Play Game</button>
    </div>
  );
}

export default PlayGame;
