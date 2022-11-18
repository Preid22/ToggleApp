import React, { useState } from "react";
import "./App.css";
import ColorLabel from "../ColorLabel/ColorLabel";
import Toggle from "../Toggle/Toggle";
import BoxSection from "../BoxSection/BoxSection";
import Add from "../Add/Add";
import Subtract from "../Subtract/Subtract";

function App() {
  const [toggle, setToggle] = useState(true);
  const updateToggle = () => setToggle(!toggle);

  const [increment, setIncrement] = useState(0);
  const updateIncrement = () => setIncrement(increment + 1);

  return (
    <div className="page">
      <div className="app">
        <ColorLabel toggle={toggle} />

        <Toggle update={updateToggle} />

        <Add updateincrement={updateIncrement} count={increment} />

        <Subtract />

        <BoxSection toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
