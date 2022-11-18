import React, { useState } from "react";
import "./Box2.css";
import ColorBox2 from "../ColorBox2/ColorBox2";

function Box2({ toggle }) {
    return (
<div className="box2">
        <ColorBox2
        toggle={toggle} 
        />
</div>
    );
}

export default Box2