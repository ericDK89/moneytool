import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TableDesktop } from "./components/TableDesktop";
import { TableMobile } from "./components/TableMobile";
import styles from "./styles/wrapper.module.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <main className={styles.wrapper}>
        <Dashboard />
        <TableDesktop />
        <TableMobile />
      </main>
    </div>
  );
}

export default App;