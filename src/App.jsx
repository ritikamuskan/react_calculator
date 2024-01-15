import { useState } from "react";

import "./App.css";
//In this example, slice(0, -1) creates a new array that includes elements from index 0 up to, but not including, the last element (index -1) of the original array. As a result, slicedArray contains [1, 2, 3, 4], and the original array remains unchanged.
function App() {
  const [value, setvalue] = useState("0");
  return (
    <>
      <div className="main-container">
        {/* <div className="title">
          <p>calculator</p>
        </div> */}

        <input className="input-box" type="text" value={value} />

        <div className="keys">
          <button
            className="key operator_key"
            type="text"
            value="+"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            +
          </button>
          <button
            className="key"
            type="text"
            value="*"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            *
          </button>
          <button
            className="key"
            type="text"
            value="/"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            /
          </button>
          <button
            className="key"
            type="text"
            value="-"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            -
          </button>

          <button
            className="key "
            type="text"
            value="1"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            1
          </button>
          <button
            className="key"
            type="text"
            value="2"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            2
          </button>
          <button
            className="key"
            type="text"
            value="3"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            3
          </button>

          <button
            className="key"
            type="text"
            value="4"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            4
          </button>
          <button
            className="key"
            type="text"
            value="5"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            5
          </button>
          <button
            className="key"
            type="text"
            value="6"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            6
          </button>

          <button
            className="key"
            type="text"
            value="7"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            7
          </button>
          <button
            className="key"
            type="text"
            value="8"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            8
          </button>
          <button
            className="key"
            type="text"
            value="9"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            9
          </button>

          <button
            className="key"
            type="text"
            value="0"
            onClick={(e) => setvalue(value + e.target.value)}
          >
            0
          </button>
          <button
            className="key "
            type="text"
            value="Delete"
            onClick={() => setvalue(value.slice(0, -1))}
          >
            Delete
          </button>
          <button
            className="key "
            type="text"
            value="clear"
            onClick={() => setvalue("")}
          >
            clear
          </button>

          <button
            className="key operation_key_equal"
            type="text"
            value="="
            onClick={() => setvalue(eval(value))}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
