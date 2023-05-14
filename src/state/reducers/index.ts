import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";

// import { userReducer } from "./bankReducer";

const reducers = combineReducers({
  bank: bankReducer,
  // user: userReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
