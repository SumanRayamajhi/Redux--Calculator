import {
  LOAD_ANSWER,
  LOAD_BUTTONS,
  LOAD_CLEAR,
  LOAD_BACKSPACE,
} from "./CalculatorActionType";

export const loadAnswer = (number) => {
  return {
    type: LOAD_ANSWER,
    payLoad: number,
  };
};

export const loadButtons = (number) => {
  return {
    type: LOAD_BUTTONS,
    payLoad: number,
  };
};

export const loadClear = (number) => {
  return {
    type: LOAD_CLEAR,
    payLoad: number,
  };
};

export const loadBackspace = (number) => {
  return {
    type: LOAD_BACKSPACE,
    payLoad: number,
  };
};
