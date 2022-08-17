import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
          < img src={"./src/componentes/logo1.jpg"} alt="Logo" height={100}/>
          <h1 id={styles.h1}>Ristorante Dom React</h1>
          </div>
          <nav>
            <ul className={styles.ul}>
              <li>
                <a className={styles.link} href="#">Menu</a>
              </li>
            </ul>
        </nav>
        </header>  
    );
};