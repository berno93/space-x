import React, { useState, useEffect } from 'react';
import ThemeSelection from './ThemeSelection';
import QuestionsData from '../../data/QuestionsData.json';
import QuestionCard from './QuestionCard';

function QuizzApp() {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);
    const [errorMessage, setErrorMessage] = useState();

    const handleThemeSelection = (theme) => {
        setSelectedTheme(theme);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizEnded(false);
        setSelectedOption('');
        setTimeLeft(60);
    };


    const handleAnswer = (isCorrect) => {
        if (selectedTheme && QuestionsData[selectedTheme]) {
            const themeQuestions = QuestionsData[selectedTheme].questions;

            if (isCorrect) {
                setScore(score + 1);
            }

            if (currentQuestionIndex + 1 < themeQuestions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setQuizEnded(true);
            }

            setSelectedOption('');
            setTimeLeft(60);
        }
    };



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
    }, [timeLeft]);

    const handleChange = (value) => {
        setSelectedOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOption) {
            const themeQuestions = QuestionsData[selectedTheme].questions;
            const question = themeQuestions[currentQuestionIndex];
            const isCorrect = selectedOption === question.correctAnswer;
            handleAnswer(isCorrect);
            setErrorMessage('');
        } else {
            setErrorMessage('Please select an answer');
        }
    };



    const getScorePhrase = () => {
        if (score === QuestionsData[selectedTheme].questions.length) {
            return "Congratulations! You're an expert in space exploration!";
        } else if (score >= QuestionsData[selectedTheme].questions.length / 2) {
            return "Well done! You have a good knowledge of space exploration.";
        } else {
            return "Keep exploring the universe of space knowledge.";
        }
    };

    return (
        <div className="App">
            <h1>Space Exploration Quiz</h1>
            {!selectedTheme ? (
                <ThemeSelection handleThemeSelection={handleThemeSelection} />
            ) : (
                <div>
                    <h5>Selected Theme: {QuestionsData[selectedTheme].theme}</h5>
                    {quizEnded ? (
                        <div className="Quiz-end">
                            <h2>Quiz Ended!</h2>
                            <p>
                                Your Score: {score} / {QuestionsData[selectedTheme].questions.length}
                            </p>
                            <p>{getScorePhrase()}</p>
                            <button onClick={() => handleThemeSelection(null)}>Try Again</button>
                        </div>
                    ) : (
                        <QuestionCard
                            selectedTheme={selectedTheme}
                            handleAnswer={handleAnswer}
                            currentQuestionIndex={currentQuestionIndex}
                            selectedOption={selectedOption}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            timeLeft={timeLeft}
                            errorMessage={errorMessage}
                        />
                    )}
                </div>
            )}
        </div>
    );

}

export default QuizzApp;
