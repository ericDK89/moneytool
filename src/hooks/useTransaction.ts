import { useContext } from "react";
import { NewTransactionContext } from "../context/NewTransactionContext";

export function useTransaction() {
  const value = useContext(NewTransactionContext);

  return value;
}
