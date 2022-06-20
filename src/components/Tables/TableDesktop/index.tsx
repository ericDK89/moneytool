import { TransactionList } from "../../../context/NewTransactionContext";
import styles from "./table.desktop.module.scss";

interface TableDesktopProps {
  transactionList: TransactionList[];
}

export function TableDesktop({ transactionList }: TableDesktopProps) {
  return (
    <section>
      <table className={styles.tableDesktopContainer}>
        <thead className={styles.tableDesktopHeader}>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody className={styles.tableDesktopBody}>
          {transactionList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td
                  className={
                    item.type === "deposit"
                      ? styles.tableDesktopDeposit
                      : styles.tableDesktopWithdraw
                  }
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>{item.createdAt.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
