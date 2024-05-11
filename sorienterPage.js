import React, { useState } from 'react';

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '1.2rem',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#45a049',
};

const SorienterPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!quizStarted ? (
        <button
          style={buttonStyle}
          onMouseEnter={(e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; }}
          onClick={handleStartQuiz}
        >
          Start the personality test
        </button>
      ) : (
        <QuizSection />
      )}
    </div>
  );
};

const QuizSection = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [matchesITSector, setMatchesITSector] = useState(false);

  const questions = [
    { id: 1, text: "Question 1: Do you enjoy solving problems and puzzles?" },
    { id: 2, text: "Question 2: Are you comfortable with learning new technologies?" },
    // Add more questions as needed
  ];

  const options = [
    { id: 1, text: "Yes" },
    { id: 2, text: "No" },
  ];

  const handleAnswerClick = (questionId, answerId) => {
    setUserAnswers({ ...userAnswers, [questionId]: answerId });
  };

  const evaluatePersonality = () => {
    const answerValues = Object.values(userAnswers);
    const allYes = answerValues.every(value => value === 1); // Assuming "Yes" is represented by 1
    if (allYes) {
      setMatchesITSector(true);
    }
    setQuizCompleted(true);
  };

  return (
    <div className="quiz-container">
      <h1>Personality Test</h1>
      {questions.map(question => (
        <div key={question.id} className="question">
          <h2>{question.text}</h2>
          <div className="options">
            {options.map(option => (
              <button
                key={option.id}
                className={userAnswers[question.id] === option.id ? 'selected' : ''}
                onClick={() => handleAnswerClick(question.id, option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={evaluatePersonality}>Submit Answers</button>
      {quizCompleted && matchesITSector && <p>Congratulations! Your personality matches the IT sector.</p>}
      {quizCompleted && !matchesITSector && <p>Your personality doesn't match the IT sector. You may not enjoy this sector.</p>}
    </div>
  );
};

export default SorienterPage;
