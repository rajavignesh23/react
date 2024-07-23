import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Quiz';
import Results from './Results';
import quizData from './quizData';

const time = 10;

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
  const [remainingTime, setRemainingTime] = useState(time * 60 * 1000);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const questionsPerPage = 5;
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1000) {
          clearInterval(intervalId);
          handleSubmitQuiz();
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);
    setTimerId(intervalId);
    return () => clearInterval(intervalId);
  }, []);


  const handleOptionChange = (questionIndex, optionIndex) => {
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;

    setSelectedAnswers(prevSelectedAnswers => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[startIndex + questionIndex] = optionIndex;
      return updatedAnswers;
    });
  };


  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };

  return (
    <div className="App">
      <h1>{isQuizSubmitted ? 'QUIZ RESULTS' : 'BUZZER KINGS - TECH QUIZ'}</h1>
      {!isQuizSubmitted ? (
        <>
          <div id="timer">
            <p>{`${Math.floor((remainingTime / 1000) / 60)}:${Math.floor((remainingTime / 1000) % 60).toString().padStart(2, '0')}`}</p>
          </div>
          <div id="quiz-container">
            <Quiz
              quizData={quizData.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)}
              selectedAnswers={selectedAnswers.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)}
              handleOptionChange={handleOptionChange}
            />
            <div id="pagination">
              {currentPage > 0 && (
                <button id="prev" onClick={handlePrevPage}>Previous</button>
              )}
              {currentPage < Math.ceil(quizData.length / questionsPerPage) - 1 ? (
                <button id="next" onClick={handleNextPage}>Next</button>
              ) : (
                <button id="submitbtn" onClick={handleSubmitQuiz}>Submit</button>
              )}
            </div>
          </div>
        </>
      ) : (
        <Results quizData={quizData} selectedAnswers={selectedAnswers} remainingTime={remainingTime} />
      )}
    </div>
  );
};

export default App;