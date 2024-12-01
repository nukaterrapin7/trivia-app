import { useState } from "react";
import Score from './Score/Score';
import ProgressBar from "./Progress/Progress";
import EndScreen from "./EndScreen/EndScreen";

function Trivia({ questions }) {
    const [answered, setAnswered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = questions[currentIndex];
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedOption) => {
        console.log('Selected: ${selectedOption}');
        setSelectedAnswer(selectedOption);
        setAnswered(true);
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setScore((prevScore) => prevScore - 1);
        };
    
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setAnswered(false);
            setSelectedAnswer(null);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    
    const handlePrevious = () => {
        setAnswered(false);
        setSelectedAnswer(null);
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? questions.length - 1 : prevIndex - 1
        );
      };    

    const handleRestartQuiz = () => {
        setScore(0);
        setCurrentIndex(0);
        setAnswered(false);
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
    
    return currentIndex === questions.length ? (
        <EndScreen score={score} total={questions.length} onRestart={handleRestartQuiz} />
    ) : (
        <>
            <Score score={score} />
            <h3>Question {currentIndex +1} of {questions.length}</h3>
            <ProgressBar current={currentIndex + 1} total={questions.length} />
            <div className="card">
                <div className="cardTop">
                    <p>{currentQuestion.question}</p>
                </div>
                <div className="cardBottom">
                    {renderOptions()}
                </div>
                <div>
                    {currentIndex > 0 && (
                        <button onClick={handlePrevious}>Previous</button>
                    )}
                    {currentIndex < questions.length && (
                        <button onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
        </>
    )
}                    

export default Trivia