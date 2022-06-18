import styles from './summary.module.scss';

interface SummaryProps {
  title: string,
  img: string,
  imgAlt: string,
  amount: number
}

export function Summary(props: SummaryProps) {
  return (
    <section className={styles.summaryContainer}>
      <header>
        <span>{props.title}</span>
        <img src={props.img} alt={props.imgAlt} />
      </header>
      <h1>R$ {props.amount}</h1>
      <span className={styles.lastSummarySpan}>Última entrada dia 13 de abril</span>
    </section>
  );
}
