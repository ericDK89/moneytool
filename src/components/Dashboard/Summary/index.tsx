import styles from "./summary.module.scss";

interface SummaryProps {
  title: string;
  img: string;
  imgAlt: string;
  amount: number;
}

export function Summary(props: SummaryProps) {
  return (
    <section className={styles.summaryContainer}>
      <header>
        <span>{props.title}</span>
        <img src={props.img} alt={props.imgAlt} />
      </header>
      <h1>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.amount)}
      </h1>
    </section>
  );
}
