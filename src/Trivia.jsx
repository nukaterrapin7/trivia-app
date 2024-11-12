import { useState } from "react";

function Trivia({question, optionOne, OptionTwo, optionThree, optionFour}){
     
    const [flipped, setFlipped] = useState(false)

    function handleClick() {
        setFlipped(!flipped)
        console.log(flipped)
    }

    return (
        <div onClick={()=>{handleClick()}}>
            {/* Card Front */}
            {!flipped &&
                <div className="card">
                    <div className="cardFront">
                        <div className="question">"What year did the bombs drop?"</div>
                        <div className="options">
                            <button className='answer-button'>2075</button>
                            <button className='answer-button'>2080</button>
                            <button className='answer-button'>2077</button>
                            <button className='answer-button'>2100</button>
                        </div>
                    </div>
            }
                    {/* Card Back */}
                    {flipped &&
                    <div className="cardBack">
                    <h2>"2077"</h2>
                    </div>
                </div>
                    }
        </div>
    )
}

export default Trivia