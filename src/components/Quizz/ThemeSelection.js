import React from 'react';
import QuestionsData from '../../data/QuestionsData.json';

function ThemeSelection({ handleThemeSelection }) {
  return (
    <div>
      <h3>Select a Theme:</h3>
      {Object.keys(QuestionsData).map((theme, index) => (
        <h5 key={index} onClick={() => handleThemeSelection(theme)}>
          {QuestionsData[theme].theme}
        </h5>
      ))}
    </div>
  );
}

export default ThemeSelection;
