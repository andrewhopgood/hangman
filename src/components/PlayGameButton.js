import React from "react";
import "../styles/PlayGameButton.css";

function PlayGameButton({ text, play }) {
  return (
    <div id="div__btn__play-game">
      <button id="btn__play-game" onClick={play}>
        {text}
      </button>
    </div>
  );
}

export default PlayGameButton;
