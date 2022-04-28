import {
  LOAD_ANSWER,
  LOAD_BUTTONS,
  LOAD_CLEAR,
  LOAD_BACKSPACE,
} from "./CalculatorActionType.js";

export const CALCULATOR_KEY = "calculatorStore";

let initialState = {
  number: "",
  ans: "",
};

export const calculatorReducer = (state = initialState, action) => {
  let { type, payLoad } = action;

  switch (type) {
    case LOAD_BUTTONS:
      console.log(state.number);
      console.log(action.payLoad);
      console.log(action);
      return {
        ...state,
        ...payLoad,
        number: state.number.concat(action.payLoad),
      };
    case LOAD_ANSWER:
      try {
        return {
          ...state,
          ...payLoad,
          ans: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ...payLoad,
          ans: "Error",
        };
      }

    case LOAD_CLEAR:
      return {
        ...state,
        ...payLoad,
        number: "",
        ans: "",
      };

    case LOAD_BACKSPACE:
      return {
        ...state,
        ...payLoad,
        number: state.number.slice(0, -1),
        ans: "",
      };

    default:
      return state;
  }
};
