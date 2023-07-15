import React, { useState, useEffect } from 'react';
import QuestionsData from '../../data/QuestionsData.json';
import '../../styles/App.css';

const QuestionCard = ({ selectedTheme, handleAnswer, currentQuestionIndex, selectedOption, handleChange, handleSubmit, timeLeft, errorMessage }) => {
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

    return (
        <div className="Quiz">
            <h1>{question.text}</h1>
            {errorMessage && <h5 className='error-message'>{errorMessage}</h5>}
            {question.type === 'vraiFaux' && (
                <form onSubmit={handleSubmit}>
                    <div className='answers'>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={selectedOption === 'true'}
                                    onChange={handleRadioChange}
                                />
                                True
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={selectedOption === 'false'}
                                    onChange={handleRadioChange}
                                />
                                False
                            </label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                    <p>Time: {timeLeft} seconds</p>
                </form>
            )}
            {question.type === 'choixMultiple' && (
                <form onSubmit={handleSubmit}>
                    <div className='answers'>
                        {question.options.map((option, index) => (
                            <div key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={selectedOption.includes(option)}
                                        onChange={handleCheckboxChange}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                    <p>Time: {timeLeft} seconds</p>
                </form>
            )}
        </div>
    );
}

export default QuestionCard;
