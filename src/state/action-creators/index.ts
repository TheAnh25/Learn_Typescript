import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/bankAction";

export const depositMoney = (amout: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amout,
    });
  };
};

export const withdrawMoney = (amout: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amout,
    });
  };
};

export const bankrupt = (amout: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      payload: amout,
    });
  };
};

export const login = (currentUser: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
      payload: currentUser,
    });
  };
};
