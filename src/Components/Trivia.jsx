import { useState } from "react";

function Trivia({ questions }) {
    const [answered, setAnswered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = questions[currentIndex];

    const handleAnswerClick = (selectedOption) => {
        console.log('Selected: ${selectedOption}');
        setSelectedAnswer(selectedOption);
        setAnswered(true);
    };

    const handleNext = () => {
        setAnswered(false);
        setSelectedAnswer(null);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const handlePrevious = () => {
        setAnswered(false);
        setSelectedAnswer(null);
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? questions.length - 1 : prevIndex - 1
        );
      };    
    
    const renderOptions = () => {
        const options = ["A", "B", "C", "D"];
        return options.map((opt) => {
            const optionValue = currentQuestion[`option${opt}`];
            const isCorrect = optionValue === currentQuestion.correctAnswer;
            const isSelected = optionValue === selectedAnswer;

            const buttonStyle = {
                backgroundColor:
                    answered && isCorrect
                        ? "green"
                        : answered && isSelected
                        ? "red"
                        : "",
            };
    
            return (
                <button
                    key={opt}
                    className={answered ? "answerDisplay" : "answerButton"}
                    style={buttonStyle}
                    onClick={() => !answered && handleAnswerClick(optionValue)}
                >
                    {opt}. {optionValue}
                </button>
            );
        });
    };
    
    
    return (
        <div className="card">
            <div className="card-top">
                <p>{currentQuestion.question}</p>
            </div>
            <div className="cardBottom">
                {renderOptions()}
            </div>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}                    


// style={{ display: index == activeIndex ? "block" : "none" }}

export default Trivia