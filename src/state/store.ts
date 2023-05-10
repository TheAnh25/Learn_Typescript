import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducers/bankReducer";
import thunk from "redux-thunk";

export const store = createStore(reducers, 0, applyMiddleware(thunk));
