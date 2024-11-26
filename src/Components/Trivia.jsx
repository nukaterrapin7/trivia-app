import { useState } from "react";

function Trivia({questions, question, optionA, optionB, optionC, optionD, correctAnswer}){
     
    const [answered, setAnswered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];

    function handleButtonClick(buttonMessage) {
        console.log(buttonMessage)
        setAnswered(!answered)
        console.log(answered)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? questions.length - 1 : prevIndex - 1
        );
      };    

    function reveal(answerButton, answerDisplay) {
    }
    
    if (currentIndex === 0) {
        return (
            <div className="card">
                <div className="card-top">
                    <p>{currentQuestion.question}</p>
                </div>
                <div 
                className="cardBottom">
                    {!answered && 
                        <>
                            <button className='answerButton'
                            onClick={()=>{handleButtonClick(optionA) 
                            }}>A. {currentQuestion.optionA}</button>

                            <button className='answerButton'
                            onClick={()=>{handleButtonClick(optionB) 
                            }}>B. {currentQuestion.optionB}</button>

                            <button className='answerButton'
                            onClick={()=>{handleButtonClick(optionC)
                            }}>C. {currentQuestion.optionC}</button>

                            <button className='answerButton'
                            onClick={()=>{handleButtonClick(optionD)
                            }}>D. {currentQuestion.optionD}</button>

                        </>
                    }
                    {answered &&
                        <div className="answers">
                            <button className='answerDisplay'>A. {optionA}</button>
                            <button className='answerDisplay'>B. {optionB}</button>
                            <button className='answerDisplay'>C. {optionC}</button>
                            <button className='answerDisplay'>D. {optionD}</button>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
            )
        } else if (currentIndex === questions.length - 1) {
            return (
                <div className="card">
                    <div className="card-top">
                        <p>{currentQuestion.question}</p>
                    </div>
                    <div 
                    className="cardBottom">
                        {!answered && 
                            <>
                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionA) 
                                }}>A. {currentQuestion.optionA}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionB) 
                                }}>B. {currentQuestion.optionB}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionC)
                                }}>C. {currentQuestion.optionC}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionD)
                                }}>D. {currentQuestion.optionD}</button>

                            </>
                        }
                        {answered &&
                            <div className="answers">
                                <button className='answerDisplay'>A. {optionA}</button>
                                <button className='answerDisplay'>B. {optionB}</button>
                                <button className='answerDisplay'>C. {optionC}</button>
                                <button className='answerDisplay'>D. {optionD}</button>
                            </div>
                        }
                    </div>
                    <div>
                        <button onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-top">
                        <p>{currentQuestion.question}</p>
                    </div>
                    <div 
                    className="cardBottom">
                        {!answered && 
                            <>
                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionA) 
                                }}>A. {currentQuestion.optionA}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionB) 
                                }}>B. {currentQuestion.optionB}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionC)
                                }}>C. {currentQuestion.optionC}</button>

                                <button className='answerButton'
                                onClick={()=>{handleButtonClick(optionD)
                                }}>D. {currentQuestion.optionD}</button>

                            </>
                        }
                        {answered &&
                            <div className="answers">
                                <button className='answerDisplay'>A. {optionA}</button>
                                <button className='answerDisplay'>B. {optionB}</button>
                                <button className='answerDisplay'>C. {optionC}</button>
                                <button className='answerDisplay'>D. {optionD}</button>
                            </div>
                        }
                    </div>
                    <div>
                        <button onClick={handlePrevious}>Previous</button>
                    </div>
                </div>
            )
        }
}                    




// style={{ display: index == activeIndex ? "block" : "none" }}

export default Trivia