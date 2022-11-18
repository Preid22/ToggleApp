import React from "react";
import "./BoxSection.css";
import ColorBox from "../ColorBox/ColorBox"

function BoxSection({ toggle }) {
  return (
    <div className="boxsection">
      <ColorBox toggle={toggle} />

      <ColorBox toggle={!toggle} />
    </div>
  );
}

export default BoxSection;
