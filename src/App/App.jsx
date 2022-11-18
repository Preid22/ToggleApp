import React, { useState } from "react";
import "./App.css";
import ColorLabel from "../ColorLabel/ColorLabel";
import Toggle from "../Toggle/Toggle";
import BoxSection from "../BoxSection/BoxSection";
import AddClick from "../AddClick/AddClick";

function App() {
  const [toggle, setToggle] = useState(true);
  const updateToggle = () => setToggle(!toggle);

  const [newSquare, setNewSquare] = useState(0);
  const updateSquare = () => setNewSquare(newSquare+1)

  return (
    <div className="page">
      <div className="app">
        <ColorLabel toggle={toggle} />

        <Toggle update={updateToggle} />

        <AddClick newsquare={updateSquare}
                  count={newSquare} />

        <BoxSection toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
