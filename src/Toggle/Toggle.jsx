import React from "react";
import "./Toggle.css";
import ColorLabel from "../ColorLabel/ColorLabel";

function Toggle({ update, toggle }) {
  return (
    <div className="toggler" onClick={update}>
    </div>
  );
}

export default Toggle;
