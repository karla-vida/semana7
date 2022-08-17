import styles from "./App.module.css";
import { Footer, Header, Secao } from "@componentes";
import produtos from "./services/produtos.json";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className={styles.main}>
        <Secao nome="Entradas" produtos={produtos.entradas} />

        <Secao nome="Saladas" produtos={produtos.saladas} />

        <Secao nome="Pratos principais" produtos={produtos.principais} />

        <Secao nome="Sobremesas" produtos={produtos.sobremesas} />

        <Secao nome="Bebidas" produtos={produtos.bebidas} />
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
