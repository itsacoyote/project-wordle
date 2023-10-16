import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Submissions from "../Submissions/Submissions";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submissions, setSubmission] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [winner, setWinner] = React.useState(false);

  return (
    <>
      <Submissions
        answer={answer}
        submissions={submissions}
        setWinner={setWinner}
      />
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        setSubmission={setSubmission}
        submissions={submissions}
        winner={winner}
        answer={answer}
      ></GuessForm>
    </>
  );
}

export default Game;
