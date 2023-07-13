import React, { useState, useEffect } from 'react';
import '../../styles/quizz.css';
function Question({ question, handleAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      handleAnswer(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, handleAnswer]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCorrect = selectedOption === question.correctAnswer;
    handleAnswer(isCorrect);

    setSelectedOption('');
    setTimeLeft(30);
  };

  return (
    <div className="Question">
      <h2>{question.text}</h2>
      {question.type === 'vraiFaux' && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value="vrai"
                checked={selectedOption === 'vrai'}
                onChange={handleChange}
              />
              Vrai
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="faux"
                checked={selectedOption === 'faux'}
                onChange={handleChange}
              />
              Faux
            </label>
          </div>
          <button type="submit">Répondre</button>
          <p>Temps restant : {timeLeft} secondes</p>
        </form>
      )}
      {question.type === 'choixMultiple' && (
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            </div>
          ))}
          <button type="submit">Répondre</button>
          <p>Temps restant : {timeLeft} secondes</p>
        </form>
      )}
    </div>
  );
}

export default Question;
