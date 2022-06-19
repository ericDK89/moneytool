import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface TransactionList {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface NewTransactionContextProps {
  transactionList: TransactionList[];
}

interface NewTransactionContextProviderProps {
  children: ReactNode;
}

export const NewTransactionContext = createContext(
  {} as NewTransactionContextProps
);

export function NewTransactionContextProvider({
  children,
}: NewTransactionContextProviderProps) {
  const [transactionList, setTransactionList] = useState<TransactionList[]>([]);

  useEffect(() => {
    api.get("/transactions").then((res) => setTransactionList(res.data.transactions));
  }, []);

  console.log(transactionList);

  return (
    <NewTransactionContext.Provider value={transactionList}>
      {children}
    </NewTransactionContext.Provider>
  );
}
