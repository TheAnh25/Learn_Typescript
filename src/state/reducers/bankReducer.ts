import { ActionType } from "../action-types";
import { Action } from "../actions/bankAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

// export interface caculatorState {
//   amout: number;
//   currentUser?: any;
//   loading: false;
// }

// const initialState: caculatorState = {
//   amout: 0,
//   currentUser: null,
//   loading: false,
// };

// = initialState

export const bankReducer = (state: number = initialState, action: Action) => {
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

// export const userReducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case ActionType.LOGIN:
//       return {
//         currentUser: action.payload,
//       };

//     default:
//       return state;
//   }
// };
