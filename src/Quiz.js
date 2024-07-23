import React from 'react';

const Quiz = ({ quizData, selectedAnswers, handleOptionChange }) => {
  return (
    <form>
      {quizData.map((question, index) => (
        <div key={index}>
          <h2 className="question">{question.question}</h2>
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`question-${index}-option-${optionIndex}`}
                  value={optionIndex}
                  checked={selectedAnswers[index] === optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                />
                <label htmlFor={`question-${index}-option-${optionIndex}`}>{option.text}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </form>
  );
};

export default Quiz;
