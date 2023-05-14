import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
  payload: number;
}

interface LoginAction {
  type: ActionType.LOGIN;
  payload: any;
}

export type Action =
  | DepositAction
  | WithdrawAction
  | BankruptAction
  | LoginAction;
