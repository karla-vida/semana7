import styles from "./App.module.css";
import { Footer, Header, Secao } from "@componentes";
import produtos from "./services/produtos.json";

function App() {
  const subSecoesSaladas = new Set(produtos.saladas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesSaladas, subSecoesPrincipais);

  return (
    <div className="app">
      <Header></Header>
      <main className={styles.main}>
        <Secao nome="Entradas" produtos={produtos.entradas} />

        <Secao nome="Saladas" produtos={produtos.saladas} subSecoes={Array.from(subSecoesSaladas)} />

        <Secao nome="Pratos principais" produtos={produtos.principais} subSecoes={Array.from(subSecoesPrincipais)}/>

        <Secao nome="Sobremesas" produtos={produtos.sobremesas} />

        <Secao nome="Bebidas" produtos={produtos.bebidas} />
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
