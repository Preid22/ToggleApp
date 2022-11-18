import React, { useState } from "react";
import "./Box.css";
import ColorBox from "../ColorBox/ColorBox";

function Box({ toggle }) {
    return (
<div className="box">
        <ColorBox
        toggle={toggle} 
        />
</div>
    );
}

export default Box