import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { Tables } from "./components/Tables";
import { NewTransactionProvider } from "./context/NewTransactionContext";

import styles from "./styles/wrapper.module.scss";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <NewTransactionProvider>
      <Header
        openNewTransactionModal={openNewTransactionModal}
      />

      <main className={styles.wrapper}>
        <Dashboard />
        <Tables />
      </main>

      <section>
        <NewTransactionModal
          isNewTransactionModalOpen={isNewTransactionModalOpen}
          closeNewTransactionModal={closeNewTransactionModal}
        />
      </section>
    </NewTransactionProvider>
  );
}

export default App;
