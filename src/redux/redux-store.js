import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import { cityReducer } from "./city-reducer";

let reducers = combineReducers({
  cityPage: cityReducer,
  form: formReducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export let store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

window.store = store;
