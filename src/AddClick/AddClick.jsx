import React from "react";
import "./AddClick.css"

function AddClick ({ newsquare }) {
    return (
        <div className="addclick" onClick={newsquare}>
            +
        </div>
    );
}

export default AddClick