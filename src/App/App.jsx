import React, { useState } from "react";
import "./App.css";
import ColorLabel from "../ColorLabel/ColorLabel";
import Toggle from "../Toggle/Toggle";
import BoxSection from "../BoxSection/BoxSection";
import Add from "../Add/Add";
import Subtract from "../Subtract/Subtract";
import { useTransition } from "react";
import ColorBox from "../ColorBox/ColorBox";

function App() {
  const [items, setItems] = useState([]);

  const [toggle, setToggle] = useState(true);
  const updateToggle = () => setToggle(!toggle);

  return (
    <div className="page">
      <div className="app">
        <ColorLabel toggle={toggle} />

        <Toggle items={items} update={updateToggle} />

        <Add items={items} setFunc={setItems} />

        <Subtract items={items} setFunc={setItems} />

        <BoxSection toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
