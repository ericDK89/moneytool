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
  createNewTransaction: (data: CreateNewTransaction) => Promise<void>;
}

interface NewTransactionProviderProps {
  children: ReactNode;
}

type CreateNewTransaction = Omit<TransactionList, "id" | "createdAt">;

export const NewTransactionContext = createContext(
  {} as NewTransactionContextProps
);

export function NewTransactionProvider({
  children,
}: NewTransactionProviderProps) {
  const [transactionList, setTransactionList] = useState<TransactionList[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => setTransactionList(res.data.transactions));
  }, []);

  async function createNewTransaction(
    data: CreateNewTransaction
  ): Promise<void> {
    const res = await api.post("/transactions", data);
    const { transaction } = res.data;
    setTransactionList((previousState) => [...previousState, transaction]);
  }

  return (
    <NewTransactionContext.Provider
      value={{ transactionList, createNewTransaction }}
    >
      {children}
    </NewTransactionContext.Provider>
  );
}
