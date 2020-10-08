import React from "react";
import "../styles/Puzzle.css";
import PuzzleLetter from "./PuzzleLetter";

function Puzzle({ puzzleWord }) {
  return (
    <div>
      <h1 id="puzzle__letter__container">
        {puzzleWord.map((letter) => (
          <PuzzleLetter letter={letter} key={Math.random()} />
        ))}
      </h1>
    </div>
  );
}

export default Puzzle;
