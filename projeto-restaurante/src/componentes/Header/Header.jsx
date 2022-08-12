import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
        <h1>Pizzaria Dom React</h1>
        <nav>
            <ul className={styles.ul}>
                <li>Inicio</li>
                <li>Produtos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
        <button>Sair</button>
        </header>
    );
};