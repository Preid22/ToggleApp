import React from "react";
import "./Decrement.css"

function Decrement ({ update }) {
    return (
        <div className="decrement" onCLick={update}>
        </div>
    );
}

export default Decrement