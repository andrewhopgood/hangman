import React, { useState } from "react";
import "../styles/Game.css";
import Hangman from "../components/Hangman";
import Puzzle from "../components/Puzzle";
import LetterList from "./LetterList";

function Game() {
  const [puzzleWord, setPuzzleWord] = useState([
    { letter: "H", visible: false },
    { letter: "O", visible: false },
    { letter: "U", visible: false },
    { letter: "S", visible: false },
    { letter: "E", visible: false },
  ]);

  const [turnsLeft, setTurnsLeft] = useState(10);

  const searchForLetter = (e) => {
    for (let i = 0; i < puzzleWord.length; i++) {
      if (e === puzzleWord[i].letter) {
        let display = [...puzzleWord];
        puzzleWord[i].visible = true;
        setPuzzleWord(display);
        return;
      }
    }
    setTurnsLeft((prev) => prev - 1);
  };

  return (
    <div id="game__container">
      <Hangman turnsLeft={turnsLeft} />
      <Puzzle puzzleWord={puzzleWord} />
      <LetterList searchForLetter={searchForLetter} />
    </div>
  );
}

export default Game;
