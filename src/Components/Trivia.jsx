import { useState } from "react";

function Trivia({question, optionA, optionB, optionC, optionD}){
     
    const [answered, setAnswered] = useState(false)

    function handleClick() {
        setAnswered(!answered)
        console.log(answered)
    }

    return (
        <div className="card">
            <div className="card-top">
                <p>{question}</p>
            </div>
            <div 
            onClick={()=>{handleClick()}}
            className="cardBottom">
                {!answered && 
                    <>
                        <button className='answerButton' choice='A'>A. {optionA}</button>
                        <button className='answerButton' choice='B'>B. {optionB}</button>
                        <button className='answerButton' choice='C'>C. {optionC}</button>
                        <button className='answerButton' choice='D'>D. {optionD}</button>
                    </>
                }
                {answered &&
                    <div className="answers">
                        <div className='answerDisplay' choice='A'>A. {optionA}</div>
                        <div className='answerDisplay' choice='B'>B. {optionB}</div>
                        <div className='answerDisplay' choice='C'>C. {optionC}</div>
                        <div className='answerDisplay' choice='D'>D. {optionD}</div>
                    </div>
                    }
            </div>
        </div>
        )
}

export default Trivia