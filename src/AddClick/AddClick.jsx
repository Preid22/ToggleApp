import React from "react";
import "./AddClick.css"

function AddClick ({ updateincrement, count }) {
    return (
        <div className="addclick" onClick={updateincrement}>
            {count}
        </div>
    );
}

export default AddClick