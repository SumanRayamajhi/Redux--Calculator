import "./App.css";
import Calculator from "./calculator/Calculator";
import { store } from "../src/reducers/store";
import { Provider } from "react-redux";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </React.Fragment>
  );
}

export default App;
