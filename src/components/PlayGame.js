import React from "react";
import "../styles/PlayGame.css";
function PlayGame({ startGame }) {
  const play = () => {
    startGame();
  };

  return (
    <div>
      <h1 id="game-title__classic">Classic</h1>
      <h1 id="game-title__hangman">Hangman</h1>
      <div id="div__btn__play-game">
        <button id="btn__play-game" onClick={play}>
          Play Game
        </button>
      </div>
    </div>
  );
}

export default PlayGame;
