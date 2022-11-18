import React from "react";
import "./BoxSection.css";
import Box from "../Box/Box";
import Box2 from "../Box2/Box2";

function BoxSection({ toggle }) {
  return (
    <div className="boxsection">
      <Box toggle={toggle} />

      <Box2 toggle={!toggle} />
    </div>
  );
}

export default BoxSection;
