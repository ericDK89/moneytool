import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Money Tool</h1>
        <button>Nova transação</button>
      </div>
    </header>
  );
}
