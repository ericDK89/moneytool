import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
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

        <form>
          <input placeholder="Nome" />
          <input placeholder="Preço" type="number" />

          <div className={styles.IncomeAndOutcomeButtons}>
            <button>
              <img src={incomeImg} alt="Depositando" /> Entrada
            </button>
            <button>
              <img src={outcomeImg} alt="Sacando" /> Saída
            </button>
          </div>

          <input placeholder="Categoria" />
          <button className={styles.submitButton} type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </>
  );
}
