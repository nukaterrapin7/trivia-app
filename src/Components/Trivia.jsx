import { useState } from "react";

function Trivia({question, optionA, optionB, optionC, optionD, correctAnswer}){
     
    const [answered, setAnswered] = useState(false);
    // const [isDisabled, setIsDisabled] = useState(false);

    function handleClick() {
        setAnswered(!answered)
        console.log(answered)
        // if (optionA === correctAnswer) {
        //     <div className="correct"></div>
        // } else {
        //     <div className="incorrect"></div>
        // }
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
                        <button className='answerButton'>A. {optionA}</button>
                        <button className='answerButton'>B. {optionB}</button>
                        <button className='answerButton'>C. {optionC}</button>
                        <button className='answerButton'>D. {optionD}</button>
                        {/* <button className='correct'>Answer: {correctAnswer}</button> */}
                    </>
                }
                {answered &&
                    <div className="answers">
                        {/* <div onClick={handleClick} disabled={isDisabled}></div> */}
                        <div className='answerDisplay'>A. {optionA}</div>
                        <div className='answerDisplay'>B. {optionB}</div>
                        <div className='answerDisplay'>C. {optionC}</div>
                        <div className='answerDisplay'>D. {optionD}</div>
                        <div className='correct'>Answer: {correctAnswer}</div>
                    </div>
                }
            </div>
        </div>
        )
    // const [selectedAnswer, setSelectedAnswer] = useState(null);
    // const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    // const handleAnswerClick = (option) => {
    //     setSelectedAnswer(option);
    //     setIsAnswerCorrect(option === questions.correctAnswer);
    // };

    // return (
    //     <div>
    //         <h2>{questions.question}</h2>
    //         <ul>
    //             {questions.options.map((option, index) => (
    //                 <li
    //                     key={index}
    //                     onClick={() => handleAnswerClick(option)}
    //                     style={{
    //                         backgroundColor: selectedAnswer === option
    //                             ? isAnswerCorrect ? 'green' : 'red'
    //                             : 'white'
    //                     }}
    //                 >
    //                     {option}
    //                 </li>
    //             ))}
    //         </ul>
    //         {selectedAnswer && (
    //             <p>{isAnswerCorrect ? "Correct!" : "Incorrect!"}</p>
    //         )}
    //     </div>
    // )
}


export default Trivia