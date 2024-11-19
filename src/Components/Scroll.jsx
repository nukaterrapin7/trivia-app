import React, { useState } from 'react';
import Trivia from './Trivia'


function Scroll({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const currentQuestion = questions[currentIndex];

  if (currentIndex === 0) {
    return (
    <div>
      <pre>{JSON.stringify(currentQuestion, null, 2)}</pre>
      <button onClick={handleNext}>Next</button>
    </div>
    )
  } else if (currentIndex === questions.length - 1) {
    return (
    <div>
      <pre>{JSON.stringify(currentQuestion, null, 2)}</pre>
      <button onClick={handlePrevious}>Previous</button>
    </div>
    )
  } else {
    return (
        <div>
          <pre>{JSON.stringify(currentQuestion, null, 2)}</pre>
          <Trivia key={index} question={question.question} optionA={question.optionA} optionB={question.optionB} optionC={question.optionC}optionD={question.optionD} answer={question.correctAnswer}/>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
    );
  }
}

export default Scroll;