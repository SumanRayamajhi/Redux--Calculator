import { rootReducer } from "./rootReducer";
// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export { store };
