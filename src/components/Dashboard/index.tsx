import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import totalImg from "../../assets/images/total.svg";
import styles from "./dashboard.module.scss";
import { Summary } from "./Summary";

export function Dashboard() {
  return (
    <article className={styles.dashboardContainer}>
      <Summary
        title="Entradas"
        img={incomeImg}
        imgAlt="Valores depositado"
        amount={5000}
      />
      <Summary
        title="Saídas"
        img={outcomeImg}
        imgAlt="Valores sacados"
        amount={5000}
      />
      <Summary
        title="Total"
        img={totalImg}
        imgAlt="Valores totais"
        amount={5000}
      />
    </article>
  );
}
