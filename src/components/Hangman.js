import React from "react";
import "../styles/Hangman.css";

function Hangman({ turnsLeft }) {
  let hangman = <div></div>;
  let base = <div id="base"></div>;
  let leftPost = <div id="left-post"></div>;
  let topPost = <div id="top-post"></div>;
  let noose = <div id="noose"></div>;
  let head = <div id="head"></div>;
  let body = <div id="body"></div>;
  let leftArm = <div id="left-arm"></div>;
  let rightArm = <div id="right-arm"></div>;
  let leftLeg = <div id="left-leg"></div>;
  let rightLeg = <div id="right-leg"></div>;
  let gameOver = <div id="game-over">Game Over</div>;

  if (turnsLeft === 9) {
    hangman = <>{base}</>;
  }

  if (turnsLeft === 8) {
    hangman = (
      <>
        {base}
        {leftPost}
      </>
    );
  }
  if (turnsLeft === 7) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
      </>
    );
  }
  if (turnsLeft === 6) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
      </>
    );
  }

  if (turnsLeft === 5) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
      </>
    );
  }
  if (turnsLeft === 4) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
        {body}
      </>
    );
  }
  if (turnsLeft === 3) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
        {body}
        {leftArm}
      </>
    );
  }
  if (turnsLeft === 2) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
        {body}
        {leftArm}
        {rightArm}
      </>
    );
  }
  if (turnsLeft === 1) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
        {body}
        {leftArm}
        {rightArm}
        {leftLeg}
      </>
    );
  }
  if (turnsLeft === 0) {
    hangman = (
      <>
        {base}
        {leftPost}
        {topPost}
        {noose}
        {head}
        {body}
        {leftArm}
        {rightArm}
        {leftLeg}
        {rightLeg}
        {gameOver}
      </>
    );
  }

  return (
    <div id="hangman__container">
      <div>{hangman}</div>
    </div>
  );
}

export default Hangman;
