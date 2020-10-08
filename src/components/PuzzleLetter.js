import React from "react";
import "../styles/PuzzleLetter.css";

function PuzzleLetter({ letter, puzzleWord }) {
  return <div id="puzzle__letter">{letter.visible ? letter.letter : " "}</div>;
}

export default PuzzleLetter;
