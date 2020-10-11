import React, { useState } from "react";
import "../styles/Game.css";
import Hangman from "../components/Hangman";
import Puzzle from "../components/Puzzle";
import LetterList from "./LetterList";
import PlayGame from "../components/PlayGame";
import words from "../data/words";
import WinGame from "../components/WinGame";
import LoseGame from "../components/LoseGame";
import Score from "../components/Score";

function Game() {
  const [puzzleWord, setPuzzleWord] = useState([]);
  const [turnsLeft, setTurnsLeft] = useState(10);
  const [isGameActive, setIsGameActive] = useState(false);
  const [checkForWin, setcheckForWin] = useState(0);
  const [score, setScore] = useState(0);

  const trackPuzzleWord = () => {
    setcheckForWin((prev) => prev + 1);
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

  const resetWordVisible = () => {
    for (let i = 0; i < puzzleWord.length; i++) {
      puzzleWord[i].visible = false;
    }
  };

  const startGame = () => {
    resetWordVisible();
    setPuzzleWord(words[Math.floor(Math.random() * words.length)]);
    setIsGameActive(true);
  };

  const playAgain = () => {
    if (turnsLeft === 0) {
      setScore(0);
    }
    setPuzzleWord([]);
    setTurnsLeft(10);
    setcheckForWin(0);
    startGame();
    setScore((prev) => prev + turnsLeft * 250);
  };

  let playGame = <PlayGame startGame={startGame} />;

  if (isGameActive === true) {
    playGame = (
      <>
        <Hangman turnsLeft={turnsLeft} />
        <Score score={score} />
        <Puzzle puzzleWord={puzzleWord} />
        <LetterList searchForLetter={searchForLetter} />
      </>
    );
  }
  if (isGameActive === true && checkForWin === puzzleWord.length) {
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
      </>
    );
  }
  return <div id="game__container">{playGame}</div>;
}

export default Game;
