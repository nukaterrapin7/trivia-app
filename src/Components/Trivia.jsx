import { useState } from "react";
import answerButton from "./Answers";

function Trivia({question, optionOne, OptionTwo, optionThree, optionFour}){
     
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
                        <div className="cardTop">"What year did the bombs drop?"</div>
                        <div className="cardBottom">
                            <answerButton />
                            {/* <button className='answer-button'>2075</button>
                            <button className='answer-button'>2080</button>
                            <button className='answer-button'>2077</button>
                            <button className='answer-button'>2100</button> */}
                        </div>
                    </div>
                </div>
            }
                {/* Card Back */}
                {flipped &&
                <div className="cardBack">
                <h2>"2077"</h2>
                </div>
                }
        </div>
    )
}

export default Trivia