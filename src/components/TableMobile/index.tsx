import styles from "./table.mobile.module.scss";

export function TableMobile() {
  return (
    <article className={styles.tableMobileContainer}>
      <header>
        <h1>Listagem</h1>
        <span>4 itens</span>
      </header>

      <section className={styles.tableMobileContent}>
        <p>Desenvolvimento de site</p>
        <h2 className={styles.tableMobileDeposit}>R$ 12.000,00</h2>
        <div>
          <span>Vendas</span>
          <time>13/04/2022</time>
        </div>
      </section>
      <section className={styles.tableMobileContent}>
        <p>Cachorro quente</p>
        <h2 className={styles.tableMobileWithdraw}>R$ 25,00</h2>
        <div>
          <span>Lanche</span>
          <time>12/04/2022</time>
        </div>
      </section>
    </article>
  );
}
