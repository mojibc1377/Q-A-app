import React, { useState } from 'react';

const QuestionCard = ({ question, answer, level, onShowNextQuestion }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  const moveToNextQuestion = () => {
    setShowAnswer(false);
    onShowNextQuestion();
  };

  return (
    <div className="question-card">
        <br/>
      <br/>
      <p>{question}</p>
      <h6>Difficulty: {level}</h6>
    
      {!showAnswer && (
        <div className='buttons'>
        <button className="reveal-button" onClick={revealAnswer}>
          Reveal Answer
        </button>
          <br/>
        <button className="next-button" onClick={moveToNextQuestion}>
          Next Question
        </button>
        </div>
      )}
      {showAnswer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
          <button className="next-button" onClick={moveToNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
