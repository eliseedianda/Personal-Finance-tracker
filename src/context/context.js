import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const FinanceTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transact, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <FinanceTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transact }}
    >
      {children}
    </FinanceTrackerContext.Provider>
  );
};
