import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { sumNumber, mulNumber } from "./action/index";

function App() {
  const myState = useSelector((state) => state.sumTheNumber);
  const myStateI = useSelector((state) => state.mulTheNumber);
  const [userInput, setuserInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [userInputI, setuserInputI] = useState("");
  const [userInputII, setuserInputII] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Addition</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <input
              className="quantity__input"
              placeholder="No."
              onChange={(e) => setuserInput(Number(e.target.value))}
              value={userInput}
              type="text"
            />
            <input
              className="quantity__input"
              placeholder="No."
              onChange={(e) => setSuggestion(Number(e.target.value))}
              value={suggestion}
              type="text"
            />
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myState}
            />
            <button
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(sumNumber(userInput, suggestion))}
            >
              <span>+</span>
            </button>
          </div>
          <h1>Multiplication</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <input
              className="quantity__input"
              placeholder="No."
              onChange={(e) => setuserInputI(Number(e.target.value))}
              value={userInputI}
              type="text"
            />
            <input
              className="quantity__input"
              placeholder="No."
              onChange={(e) => setuserInputII(Number(e.target.value))}
              value={userInputII}
              type="text"
            />
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myStateI}
            />
            <button
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(mulNumber(userInputI, userInputII))}
            >
              <span>x</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
