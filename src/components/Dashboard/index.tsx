import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import totalImg from "../../assets/images/total.svg";
import { useTransaction } from "../../hooks/useTransaction";
import styles from "./dashboard.module.scss";
import { Summary } from "./Summary";

export function Dashboard() {
  const { transactionList } = useTransaction();

  const allValues = transactionList.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <article className={styles.dashboardContainer}>
      <Summary
        title="Entradas"
        img={incomeImg}
        imgAlt="Valores depositado"
        amount={allValues.deposit}
      />
      <Summary
        title="Saídas"
        img={outcomeImg}
        imgAlt="Valores sacados"
        amount={allValues.withdraw}
      />
      <Summary
        title="Total"
        img={totalImg}
        imgAlt="Valores totais"
        amount={allValues.total}
      />
    </article>
  );
}
