import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, answer, level, onShowNextQuestion }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Add a delay before showing the card with a fade animation
    if (showAnswer) {
      setTimeout(() => {
        onShowNextQuestion();
      }, 500); // 500ms delay
    }
  }, [showAnswer, onShowNextQuestion]);

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className={`question-card ${showAnswer ? 'show' : ''}`}>
      <h2>Question (Difficulty: {level}):</h2>
      <p>{question}</p>
      {!showAnswer && (
        <button className="reveal-button" onClick={revealAnswer}>
          Reveal Answer
        </button>
      )}
      {showAnswer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
