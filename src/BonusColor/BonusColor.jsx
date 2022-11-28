import React from "react";
import "./BonusColor.css";

function BonusColor({ toggle }) {
    const colorVal = toggle ? "green" : "pink";
    return (
        <div className="bonuscolor" style={{ backgroundColor: colorVal}}>
        </div>
    )
}

export default BonusColor