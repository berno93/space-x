import React, { useState } from 'react';
import Question from './Question';
import QuestionsData from '../../data/QuestionsData.json';
import '../../styles/App.css';

function Quiz({ questions }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < QuestionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnded(true);
    }
  };

  return (
    <div className="Quiz">
      {!quizEnded ? (
        <Question
          question={QuestionsData[currentQuestionIndex]}
          handleAnswer={handleAnswer}
          score={score}
        />
      ) : (
        <div className="Quiz-end">
          <h2>Quiz Terminé !</h2>
          <p>
            Votre score : {score} / {QuestionsData.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
