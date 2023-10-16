import React from "react";

function GuessForm({ guess, setGuess, submissions, setSubmission, winner, answer }) {
  function formatGuess(event) {
    const formattedGuess = event.target.value.toUpperCase();
    setGuess(formattedGuess);
  }

  function submitGuess(event) {
    event.preventDefault();
    console.log("GUESS", guess);
    const nextSubmissions = [...submissions, guess];
    setSubmission(nextSubmissions);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      {submissions.length === 6 && !winner && (
        <div className="sad banner">
          Sorry, the correct answer is <strong>{answer}</strong>.
        </div>
      )}
      {winner && (
        <div className="happy banner">
          <strong>Congratulations!</strong> Got it in <strong>{submissions.length} guesses</strong>.
        </div>
      )}
      { submissions.length < 6 && (
        <input
          type="text"
          id="guess-input"
          value={guess}
          onChange={formatGuess}
          pattern="[A-Za-z]{5}"
        />
      )}
    </form>
  );
}

export default GuessForm;
