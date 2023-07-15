import React, { useState, useEffect } from 'react';
import QuestionsData from '../../data/QuestionsData.json';
import '../../styles/App.css';
import '../../styles/quizz.css';

const QuestionCard = ({
  selectedTheme,
  currentQuestionIndex,
  selectedOption,
  handleChange,
  handleSubmit,
  timeLeft,
  errorMessage,
}) => {
  const themeQuestions = QuestionsData[selectedTheme].questions;
  const question = themeQuestions[currentQuestionIndex];
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setIsAnswerSelected(true);
    handleChange(value);
  };

  const handleCheckboxChange = (e) => {
    const checkedOptions = selectedOption ? [...selectedOption] : [];

    if (e.target.checked) {
      setIsAnswerSelected(true);
      checkedOptions.push(e.target.value);
    } else {
      const index = checkedOptions.indexOf(e.target.value);
      checkedOptions.splice(index, 1);
      setIsAnswerSelected(checkedOptions.length > 0);
    }

    handleChange(checkedOptions);
  };

  useEffect(() => {
    if (isAnswerSelected && selectedOption) {
      handleSubmit();
    }
  }, [isAnswerSelected, selectedOption, handleSubmit]);

  return (
    <div className="Quiz">
      <h1>{question.text}</h1>
      {errorMessage && <h5 className="error-message">{errorMessage}</h5>}
      {question.type === 'trueFalse' && (
        <form>
          <div className="answers">
            <div>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="true"
                  checked={selectedOption === ['true']}
                  onChange={handleCheckboxChange}
                />
                <span>True</span>
              </label>
            </div>
            <div>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="false"
                  checked={selectedOption === ['false']}
                  onChange={handleCheckboxChange}
                />
                <span>False</span>
              </label>
            </div>
          </div>
          <p>Time: {timeLeft} seconds</p>
        </form>
      )}

      {question.type === 'multipleChoice' && (
        <form>
          <div className="answers">
            {question.options.map((option, index) => (
              <div key={index}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOption.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
          <p>Time: {timeLeft} seconds</p>
        </form>
      )}
    </div>
  );
};

export default QuestionCard;
