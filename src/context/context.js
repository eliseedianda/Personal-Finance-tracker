import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 50,
    category: "Clothes",
    type: "Expense",
    date: "2021-11-15",
    id: "73bf14d9-6bf0-429e-847c-e1eca2eaee46",
  },
  {
    amount: 100,
    category: "Food",
    type: "Expense",
    date: "2021-11-14",
    id: "bb49fc73-b232-4e23-ba9b-157eb43a43bc",
  },
  {
    amount: 500,
    category: "Savings",
    type: "Income",
    date: "2021-11-13",
    id: "a4ed7c49-7258-4dd7-9276-53be8a4e05ad",
  },
  {
    amount: 50,
    category: "Bills",
    type: "Expense",
    date: "2021-11-14",
    id: "ac576ff0-d330-46de-81f8-a17efcf4f2a0",
  },
  {
    amount: 700,
    category: "Business",
    type: "Income",
    date: "2021-11-12",
    id: "3b7411c8-83c5-4ff5-b1f0-827b14f87b63",
  },
];
//
export const FinanceTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const balance = transaction.reduce((acc, curVal) => {
    return curVal.type === "Expense"
      ? acc - curVal.amount
      : acc + curVal.amount;
  }, 0);
  return (
    <FinanceTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transaction, balance }}
    >
      {children}
    </FinanceTrackerContext.Provider>
  );
};
