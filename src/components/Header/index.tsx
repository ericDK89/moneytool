import styles from "./header.module.scss";

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Money Tool</h1>
        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </header>
  );
}
