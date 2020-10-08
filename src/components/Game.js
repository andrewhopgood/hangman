import React, { useState } from "react";
import "../styles/Game.css";
import Hangman from "../components/Hangman";
import Puzzle from "../components/Puzzle";
import LetterList from "./LetterList";
import PlayGame from "../components/PlayGame";
import words from "../data/words";
import WinGame from "../components/WinGame";
import LoseGame from "../components/LoseGame";

function Game() {
  const [puzzleWord, setPuzzleWord] = useState([]);
  const [turnsLeft, setTurnsLeft] = useState(10);
  const [isGameActive, setIsGameActive] = useState(false);
  const [didWin, setDidWin] = useState(0);

  const trackPuzzleWord = () => {
    setDidWin((prev) => prev + 1);
  };

  const searchForLetter = (e) => {
    let count = 0;
    for (let i = 0; i < puzzleWord.length; i++) {
      if (e === puzzleWord[i].letter) {
        let display = [...puzzleWord];
        puzzleWord[i].visible = true;
        setPuzzleWord(display);
        trackPuzzleWord();
        count += +1;
      }
    }
    if (count === 0) {
      setTurnsLeft((prev) => prev - 1);
    }
  };

  const startGame = () => {
    setPuzzleWord(words[Math.floor(Math.random() * words.length)]);
    setIsGameActive(true);
  };

  const playAgain = () => {
    setPuzzleWord([]);
    setTurnsLeft(10);
    setDidWin(0);
    startGame();
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
  if (isGameActive === true && didWin === puzzleWord.length) {
    playGame = (
      <>
        <WinGame playAgain={playAgain} />
        <Puzzle puzzleWord={puzzleWord} />
      </>
    );
  }
  if (isGameActive === true && turnsLeft === 0) {
    playGame = (
      <>
        <LoseGame playAgain={playAgain} />
        <Puzzle puzzleWord={puzzleWord} />
      </>
    );
  }
  return <div id="game__container">{playGame}</div>;
}

export default Game;
