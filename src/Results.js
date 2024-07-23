import React from 'react';

const Results = ({ quizData, selectedAnswers, remainingTime }) => {
  let score = 0;

  return (
    <div className="results-container">
      <div id="timer">
        <p>{`${Math.floor((remainingTime / 1000) / 60)}:${Math.floor((remainingTime / 1000) % 60).toString().padStart(2, '0')}`}</p>
      </div>
      {quizData.map((question, index) => {
        const selectedAnswer = selectedAnswers[index];
        const correctAnswer = question.correct;
        const questionOptions = question.options;

        if (selectedAnswer !== null && selectedAnswer !== undefined) {
          if (Array.isArray(selectedAnswer)) {
            const correctOptions = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
            const isCorrect = correctOptions.every(option => selectedAnswer.includes(option)) &&
              correctOptions.length === selectedAnswer.length;
            if (isCorrect) {
              score++;
              return (
                <div key={index} className="result correct">
                  <p>Correct!</p>
                </div>
              );
            } else {
              const correctAnswers = correctOptions.map(opt => questionOptions[opt].text).join(', ');
              return (
                <div key={index} className="result incorrect">
                  <p>Incorrect. Correct answer(s): {correctAnswers}</p>
                </div>
              );
            }
          } else {
            if (selectedAnswer === correctAnswer) {
              score++;
              return (
                <div key={index} className="result correct">
                  <p>Correct!</p>
                </div>
              );
            } else {
              const correctAnswerText = questionOptions[correctAnswer].text;
              return (
                <div key={index} className="result incorrect">
                  <p>Incorrect. Correct answer: {correctAnswerText}</p>
                </div>
              );
            }
          }
        } else {
          return (
            <div key={index} className="result not-selected">
              <p>No answer selected.</p>
            </div>
          );
        }
      })}
      <div className="final-score">
        <p>Your score is {score} out of {quizData.length}.</p>
      </div>
    </div>
  );
};

export default Results;
