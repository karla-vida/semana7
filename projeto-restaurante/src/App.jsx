import styles from "./App.module.css";
import { Header } from "./componentes";
import { Footer } from "./componentes";
import produtos from "./services/produtos.json";
import { ListaCards } from "./componentes";
import {Card} from "./componentes";

function App() {
  return (
    <div className="app"> 
    <Header></Header>
    <ListaCards produtos={produtos.entradas}/>
    <ListaCards produtos={produtos.principais}/>
    <ListaCards produtos={produtos.sobremesas}/>
    <Footer></Footer>
    </div>
  );
}
export default App;
