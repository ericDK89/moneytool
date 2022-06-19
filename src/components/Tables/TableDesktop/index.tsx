import { TransactionList } from "../../../context/NewTransactionContext";
import styles from "./table.desktop.module.scss";

interface TableDesktopProps {
  transactionList: TransactionList[];
}

export function TableDesktop() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className={styles.tableDesktopDeposit}>R$ 1700,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Lanche</td>
            <td className={styles.tableDesktopWithdraw}>- R$ 30,00</td>
            <td>Comida</td>
            <td>15/04/2022</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
