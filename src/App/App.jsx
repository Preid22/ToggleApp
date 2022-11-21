import React, { useState } from "react";
import "./App.css";
import ColorLabel from "../ColorLabel/ColorLabel";
import Toggle from "../Toggle/Toggle";
import BoxSection from "../BoxSection/BoxSection";
import Add from "../Add/Add";
import Subtract from "../Subtract/Subtract";
import { useTransition } from "react";

const BonusContext = React.createContext();

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const [toggle, setToggle] = useState(true);
  const updateToggle = () => setToggle(!toggle);

  const [increment, setIncrement] = useState(0);
  const updateIncrement = () => setIncrement(increment + 1);

  const [decrement, setDecrement] = useState(increment);
  const updateDecrement = () => setDecrement(decrement - 1);

  return (
    <div className="page">
      <div className="app">
        <BonusContext.Provider>
          <ColorLabel toggle={toggle} />

          <Toggle update={updateToggle} />

          <Add updateincrement={updateIncrement} count={increment} />

          <Subtract updatedecrement={updateDecrement} />

          <button
            type="button"
            onClick={() => {
              setItems([...items, items[items.length - 1] + 1]);
            }}
          >
            Add Item
          </button>

          {items.map((item) => {
            return <div>{item}</div>;
          })}

          <BoxSection toggle={toggle} />
        </BonusContext.Provider>
      </div>
    </div>
  );
}

export default App;
