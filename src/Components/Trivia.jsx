import { useState } from "react";

function Trivia({question, optionA, optionB, optionC, optionD}){
     
    const [flipped, setFlipped] = useState(false)

    function handleClick() {
        setFlipped(!flipped)
        console.log(flipped)
    }

    return (
        <div 
        onClick={()=>{handleClick()}}
        className="cardContainer">
            {/* Card Front */}
            {!flipped &&
                <div className="card">
                    <div className="cardFront">
                            <p>{question}</p>
                            <button className='answerButton' choice='A'>A. {optionA}</button>
                            <button className='answerButton' choice='B'>B. {optionB}</button>
                            <button className='answerButton' choice='C'>C. {optionC}</button>
                            <button className='answerButton' choice='D'>D. {optionD}</button>
                        </div>
                    </div>
            }
            {/* Card Back */}
            {flipped &&
                <div className="card">
                    <div className="cardBack">
                            <p>{question}</p>
                            <button className='answerButton' choice='A'>A. {optionA}</button>
                            <button className='answerButton' choice='B'>B. {optionB}</button>
                            <button className='answerButton' choice='C'>C. {optionC}</button>
                            <button className='answerButton' choice='D'>D. {optionD}</button>
                    </div>
                </div>
                }
        </div>
    )
}

export default Trivia