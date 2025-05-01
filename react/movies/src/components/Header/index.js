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
          <Link to="/search" className={styles.link}>Pesquisar</Link>
          <Link to="/favorites" className={styles.link}>Favoritos</Link>
          <Link to="/video-cadastre" className={styles.link}>Cadastrar Video</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;