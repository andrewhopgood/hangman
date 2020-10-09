import React from "react";
import "../styles/Hangman.css";

function Hangman({ turnsLeft }) {
  let hangman = [];

  switch (turnsLeft) {
    case 10:
      hangman = [];
      break;
    case 9:
      hangman = ["base"];
      break;
    case 8:
      hangman = ["base", "left-post"];
      break;
    case 7:
      hangman = ["base", "left-post", "top-post"];
      break;
    case 6:
      hangman = ["base", "left-post", "top-post", "noose"];
      break;
    case 5:
      hangman = ["base", "left-post", "top-post", "noose", "head"];
      break;
    case 4:
      hangman = ["base", "left-post", "top-post", "noose", "head", "body"];
      break;
    case 3:
      hangman = [
        "base",
        "left-post",
        "top-post",
        "noose",
        "head",
        "body",
        "left-arm",
      ];
      break;
    case 2:
      hangman = [
        "base",
        "left-post",
        "top-post",
        "noose",
        "head",
        "body",
        "left-arm",
        "right-arm",
      ];
      break;
    case 1:
      hangman = [
        "base",
        "left-post",
        "top-post",
        "noose",
        "head",
        "body",
        "left-arm",
        "right-arm",
        "left-leg",
      ];
      break;
    case 0:
      hangman = [
        "base",
        "left-post",
        "top-post",
        "noose",
        "head",
        "body",
        "left-arm",
        "right-arm",
        "left-leg",
        "right-leg",
      ];
      break;

    default:
      hangman = [];
  }

  return (
    <div id="hangman__container">
      <div>
        {hangman.map((item) => (
          <div id={item} key={item}></div>
        ))}
      </div>
    </div>
  );
}

export default Hangman;
