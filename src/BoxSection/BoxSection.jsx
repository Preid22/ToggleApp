import React from "react";
import "./BoxSection.css";
import ColorBox from "../ColorBox/ColorBox"
import BonusBox from "../BonusBox/BonusBox";

function BoxSection({ toggle, items }) {
  if(items.length === 0){
    return (
      <div className="boxsection">
      <ColorBox toggle={toggle} />
      <ColorBox toggle={!toggle} />
      </div>
    );
    } else {
      return (
        <div className="boxsection">
        <ColorBox toggle={toggle} />
        <BonusBox items={items} toggle={toggle} />
        <ColorBox toggle={!toggle} />
        </div>
      )
    }
  }


export default BoxSection;
