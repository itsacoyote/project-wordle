import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Submissions({ submissions, answer, setWinner }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, guessIndex) => (
        <Guess
          guess={submissions[guessIndex]}
          answer={answer}
          key={Math.random()}
          setWinner={setWinner}
        />
      ))}
    </div>
  );
}

export default Submissions;
