import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer, setWinner }) {
  const results = checkGuess(guess, answer);

  const isCorrect = results && results.every((result) => result.status === 'correct');

  if (isCorrect) {
    setWinner(true);
  }

  return (
    <p className="guess" key={Math.random()}>
      {results ? results.map((result) => (
        <span className={`cell ${result.status}`} key={Math.random()}>
          {result.letter}
        </span>
      )) : range(5).map((i) => (
        <span className="cell" key={Math.random()}></span>
      ))}
    </p>
  );
}

export default Guess;
