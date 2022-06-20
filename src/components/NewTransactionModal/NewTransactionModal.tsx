import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import { useTransaction } from "../../hooks/useTransaction";
import styles from "./new.transaction.modal.module.scss";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  closeNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  closeNewTransactionModal,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  const { createNewTransaction } = useTransaction();

  async function handleCreateNewTransaction(e: FormEvent): Promise<void> {
    e.preventDefault();

    await createNewTransaction({
      title,
      amount,
      type,
      category,
    });

    closeNewTransactionModal();
    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
  }

  function createTitle(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    const transactionTitle = e.target.value;
    return setTitle(transactionTitle);
  }

  function createAmount(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    const transactionAmount = e.target.valueAsNumber;
    setAmount(transactionAmount);
  }

  function createCategory(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    const transactionCategory = e.target.value;
    setCategory(transactionCategory);
  }

  function invalidInput(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Campo obrigatório");
  }

  return (
    <>
      <Modal
        closeTimeoutMS={250}
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
        className={styles.newTransactionModalContainer}
        overlayClassName={styles.newTransactionModalOverlay}
      >
        <header>
          <h1>Cadastrar transação</h1>
          <button
            title="Cancelar nova transação"
            onClick={closeNewTransactionModal}
          >
            <img src={closeImg} alt="Cancelar nova transação" />
          </button>
        </header>

        <form onSubmit={handleCreateNewTransaction}>
          <input
            placeholder="Nome"
            onChange={createTitle}
            required
            onInvalid={invalidInput}
            value={title}
          />
          <input
            placeholder="Preço"
            type="number"
            onChange={createAmount}
            required
            onInvalid={invalidInput}
            value={amount}
          />

          <div className={styles.IncomeAndOutcomeButtons}>
            <button
              onClick={() => setType("deposit")}
              type="button"
              className={type === "deposit" ? styles.depositButton : ""}
            >
              <img src={incomeImg} alt="Depositando" /> Entrada
            </button>
            <button
              onClick={() => setType("withdraw")}
              type="button"
              className={type === "withdraw" ? styles.withdrawButton : ""}
            >
              <img src={outcomeImg} alt="Sacando" /> Saída
            </button>
          </div>

          <input
            placeholder="Categoria"
            onChange={createCategory}
            required
            onInvalid={invalidInput}
            value={category}
          />
          <button className={styles.submitButton} type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </>
  );
}
