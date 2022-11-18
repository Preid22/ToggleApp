import React from "react";
import "./DecrementClick.css"

function DecrementClick ({ update }) {
    return (
        <div className="decrementclick" onCLick={update}>
        </div>
    );
}

export default DecrementClick