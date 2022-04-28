import "./App.css";
//import { Providor } from "react-redux";
import Calculator from "./calculator/Calculator";
import { store } from "../src/reducers/store";
import { Provider } from "react-redux";
import React from "react";

function App() {
  return (
    // <div className="App">
    // </div>

    <React.Fragment>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </React.Fragment>
  );
}

export default App;
