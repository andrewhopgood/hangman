import React from "react";
import "../styles/LetterList.css";
import letters from "../data/letters";
import Letter from "./Letter";

function LetterList({ searchForLetter }) {
  return (
    <div id="letters__container">
      {letters.map((letter) => (
        <Letter
          name={letter.name}
          key={letter.name}
          searchForLetter={searchForLetter}
        />
      ))}
    </div>
  );
}

export default LetterList;
