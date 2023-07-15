import React from 'react';
import QuestionsData from '../../data/QuestionsData.json';
import '../../styles/quizz.css';

function ThemeSelection({ handleThemeSelection }) {
  return (
    <div className="theme-selection-container">
      <h3>Select a Theme:</h3>
      <div className="theme-list">
        {Object.keys(QuestionsData).map((theme, index) => (
          <h5
            key={index}
            onClick={() => handleThemeSelection(theme)}
            className="theme-item"
          >
            {QuestionsData[theme].theme}
          </h5>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelection;
