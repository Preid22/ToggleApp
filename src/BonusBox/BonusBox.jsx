import React from "react";
import "./BonusBox.css"
import BonusColor from "../BonusColor/BonusColor";

function BonusBox({ items, toggle }) {
    if(items.length <= 24){
    return (
        <div className="bonusbox">
            {items.map((item) => {
                return(
                <div className="bonuscolor">
                    <BonusColor toggle={toggle} />
                </div>
                )
            })}
        </div>
    )
        } else {
            return <div>That's enough..</div>
        }
}

export default BonusBox