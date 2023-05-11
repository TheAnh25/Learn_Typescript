import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";

export const Caculator = () => {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);
  console.log(amount);
  console.log("a");
  return (
    <div>
      <h1 className="text-2xl font-bold">{amount}</h1>
      <button
        onClick={() => depositMoney(1000)}
        className="border p-2 hover:bg-purple-500">
        Deposit
      </button>
      <button
        onClick={() => withdrawMoney(500)}
        className="border p-2 hover:bg-sky-500">
        Withdraw
      </button>
      <button
        onClick={() => bankrupt(0)}
        className="border p-2 hover:bg-pink-500">
        Bankrupt
      </button>
    </div>
  );
};
