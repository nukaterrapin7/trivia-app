import { useState } from "react";
import Scroll from './Scroll'

function Trivia({question, optionA, optionB, optionC, optionD, correctAnswer}){
     
    const [answered, setAnswered] = useState(false);

    function handleButtonClick(buttonMessage) {
        console.log(buttonMessage)
        setAnswered(!answered)
        console.log(answered)
    }
      
    return (
        <div className="card">
            <div className="card-top">
                <p>{question}</p>
            </div>
            <div 
            className="cardBottom">
                {!answered && 
                    <>
                        <button className='answerButton'
                        onClick={()=>{handleButtonClick(optionA) 
                        }}>A. {optionA}</button>

                        <button className='answerButton'
                        onClick={()=>{handleButtonClick(optionB) 
                        }}>B. {optionB}</button>

                        <button className='answerButton'
                        onClick={()=>{handleButtonClick(optionC)
                        }}>C. {optionC}</button>

                        <button className='answerButton'
                        onClick={()=>{handleButtonClick(optionD)
                        }}>D. {optionD}</button>

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
        </div>
        )
}
// style={{ display: index == activeIndex ? "block" : "none" }}

export default Trivia