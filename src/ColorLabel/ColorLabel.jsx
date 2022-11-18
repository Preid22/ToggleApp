import React from "react";
import "./ColorLabel.css"

function ColorLabel ({ toggle }) {

    const colorVal1 = toggle ? "G" : "P"
    const colorVal2 = toggle ? "P" : "G"

    return (
            <div className="colorlabel"> 
            {colorVal1}:{colorVal2}
            </div>
    );
}

export default ColorLabel