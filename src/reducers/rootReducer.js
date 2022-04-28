import {
  calculatorReducer,
  CALCULATOR_KEY,
} from "./calculatorReducer/CalculatorReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [CALCULATOR_KEY]: calculatorReducer,
});

export { rootReducer };
