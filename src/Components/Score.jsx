import React from "react";

function Score({ score }) {
    return (
        <div className="score">
            <h2>Your Score: {score}</h2>
        </div>
    );
}

export default Score;