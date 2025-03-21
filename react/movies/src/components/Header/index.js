import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span>LRflix</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/Watch" className={styles.link}>Assitir</Link>
          <Link to="/Search" className={styles.link}>Pesquisar</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;