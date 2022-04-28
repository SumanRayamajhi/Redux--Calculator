import React from "react";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import { CALCULATOR_KEY } from "../reducers/calculatorReducer/CalculatorReducer";
import {
  loadButtons,
  loadBackspace,
  loadClear,
  loadAnswer,
} from "../reducers/calculatorReducer/CalculatorAction";

function Calculator() {
  const dispatch = useDispatch();
  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });
  return (
    <React.Fragment>
      <section className="Calculator_section">
        <div className="Calculator_body">
          <p className="Calculator_title">Calculator</p>
          <div className="Calculator_display">
            <input
              className="Calculator_input"
              type="text"
              placeholder="0"
              value={
                viewCalculator.ans.length === 0
                  ? viewCalculator.number
                  : viewCalculator.ans
              }
            />
          </div>

          <div className="Calculator_main">
            <button
              onClick={() => dispatch(loadClear())}
              className="Calculator_button gray"
            >
              AC
            </button>
            <button
              onClick={() => dispatch(loadBackspace())}
              className="Calculator_button backspace gray"
            >
              C
            </button>
            <button
              onClick={() => dispatch(loadButtons("/"))}
              className="Calculator_button gray"
            >
              ÷
            </button>

            <button
              onClick={() => dispatch(loadButtons("+"))}
              className="Calculator_button plus yellow"
            >
              +
            </button>
            <button
              onClick={() => dispatch(loadButtons(7))}
              className="Calculator_button"
            >
              7
            </button>
            <button
              onClick={() => dispatch(loadButtons(8))}
              className="Calculator_button"
            >
              8
            </button>
            <button
              onClick={() => dispatch(loadButtons(9))}
              className="Calculator_button"
            >
              9
            </button>
            <button
              onClick={() => dispatch(loadButtons(4))}
              className="Calculator_button"
            >
              4
            </button>
            <button
              onClick={() => dispatch(loadButtons(5))}
              className="Calculator_button"
            >
              5
            </button>
            <button
              onClick={() => dispatch(loadButtons(6))}
              className="Calculator_button"
            >
              6
            </button>
            <button
              onClick={() => dispatch(loadButtons("-"))}
              className="Calculator_button yellow"
            >
              -
            </button>

            <button
              onClick={() => dispatch(loadButtons(1))}
              className="Calculator_button"
            >
              1
            </button>
            <button
              onClick={() => dispatch(loadButtons(2))}
              className="Calculator_button"
            >
              2
            </button>
            <button
              onClick={() => dispatch(loadButtons(3))}
              className="Calculator_button"
            >
              3
            </button>
            <button
              onClick={() => dispatch(loadButtons("*"))}
              className="Calculator_button yellow"
            >
              ×
            </button>

            <button
              onClick={() => dispatch(loadButtons("."))}
              className="Calculator_button"
            >
              .
            </button>
            <button
              onClick={() => dispatch(loadButtons(0))}
              className="Calculator_button"
            >
              0
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(loadAnswer());
              }}
              className="Calculator_button equal yellow"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Calculator;
