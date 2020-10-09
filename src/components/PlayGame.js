import React from "react";
import "../styles/PlayGame.css";
import githublogo from "../data/github_logo.png";

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
      <div id="creator">Created by: Andrew Hopgood</div>
      <div id="github__container">
        <a href="https://github.com/andrewhopgood" target="_blank">
          <img id="github__logo" src={githublogo} alt="my github" />
        </a>
      </div>
    </div>
  );
}

export default PlayGame;
