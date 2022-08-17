import styles from "./App.module.css";
import { Footer, Header, Secao } from "@componentes";
import produtos from "./services/produtos.json";
import { ListaCards } from "./componentes";

function App() {
  return (
    <div className="app"> 
    <Header></Header>
    <main className={styles.main}>
        <Secao
          nome='Entradas'
          produtos={produtos.entradas}
        />

        <Secao
          nome='Principais'
          produtos={produtos.principais}
        />

        <Secao nome='Sobremesas' produtos={produtos.sobremesas} />
      </main>
    <Footer></Footer>
    </div>
  );
}
export default App;
