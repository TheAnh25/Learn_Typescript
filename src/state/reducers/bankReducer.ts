import { ActionType } from "../action-types";
import { Action } from "../actions/bankAction";

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return state * action.payload;
    default:
      return state;
  }
};

export default reducer;
