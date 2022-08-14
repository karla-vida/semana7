import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
          <nav className={styles.navBar}>
          < img src={"./src/componentes/logo.jpg"} alt="Inicio"/>
          <h1 id={styles.h1}>Pizzaria Dom React</h1>
          <label id={styles.label}>Cardápio</label>
            {/*
            <ul className={styles.ul}>
                <li>< img src={"./src/componentes/logo.jpg"} alt="Inicio"/></li>
                <li>Cardápio</li>
                  </ul>
    */}  
        </nav>
        </header>  
    );
};