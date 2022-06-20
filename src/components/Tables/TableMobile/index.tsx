import { TransactionList } from "../../../context/NewTransactionContext";
import styles from "./table.mobile.module.scss";

interface TableMobileProps {
  transactionList: TransactionList[];
}

export function TableMobile({ transactionList }: TableMobileProps) {
  return (
    <article className={styles.tableMobileContainer}>
      <header>
        <h1>Listagem</h1>
        <span>
          {transactionList.length === 0
            ? "Sem itens"
            : `${transactionList.length} item(s)`}
        </span>
      </header>

      {transactionList.map((item) => {
        return (
          <section key={item.id} className={styles.tableMobileContent}>
            <p>{item.title}</p>
            <h2
              className={
                item.type === "deposit"
                  ? styles.tableMobileDeposit
                  : styles.tableMobileWithdraw
              }
            >
              {item.amount}
            </h2>
            <div>
              <span>{item.category}</span>
              <time>{item.createdAt.toString()}</time>
            </div>
          </section>
        );
      })}
    </article>
  );
}
