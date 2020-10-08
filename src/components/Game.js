import React, { useState } from "react";
import "../styles/Game.css";
import Hangman from "../components/Hangman";
import Puzzle from "../components/Puzzle";
import LetterList from "./LetterList";
import PlayGame from "../components/PlayGame";

function Game() {
  const [puzzleWord, setPuzzleWord] = useState([
    { letter: "H", visible: false },
    { letter: "O", visible: false },
    { letter: "U", visible: false },
    { letter: "S", visible: false },
    { letter: "E", visible: false },
  ]);

  const [turnsLeft, setTurnsLeft] = useState(10);
  const [isGameActive, setIsGameActive] = useState(false);

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

  const startGame = () => {
    setIsGameActive(!isGameActive);
  };

  let playGame = <PlayGame startGame={startGame} />;
  if (isGameActive === true) {
    playGame = (
      <>
        <Hangman turnsLeft={turnsLeft} />
        <Puzzle puzzleWord={puzzleWord} />
        <LetterList searchForLetter={searchForLetter} />
      </>
    );
  }
  return <div id="game__container">{playGame}</div>;
}

export default Game;
