import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>LRflix</span>
        <nav className={styles.nav}>
          <a href="./">Home</a>
          <a href="./">Assistir</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;