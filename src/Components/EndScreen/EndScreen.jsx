import { useState } from "react";
import "./EndScreen.css";


function EndScreen({ score, total, onRestart }) {
    return (
        <div className="end-screen">
            <h1>Quiz Complete!</h1>
                <p>
                    You scored <strong>{score}</strong> out of <strong>{total}</strong>!
                </p>
                <button onClick={onRestart} className="restart-button">
                    Restart Quiz
                </button>
        </div>
    )
}

export default EndScreen;