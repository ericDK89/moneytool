import styles from './table.mobile.module.scss';

export function TableMobile() {
  return (
    <article className={styles.tableMobileContainer}>
      <div>
        <h1>Listagem</h1>
        <span>4 itens</span>
      </div>

      <section>
        <p>Desenvolvimento de site</p>
        <h2>R$ 12.000,00</h2>
        <div>
          <span>Vendas</span>
          <time>13/04/2022</time>
        </div>
      </section>
    </article>
  );
}
