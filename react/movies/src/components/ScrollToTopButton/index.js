import styles from "./ScroolToTopButton.module.css";

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <button className={styles.toUp} onClick={handleClick}>
      &#9650;
    </button>
  )
}

export default ScrollToTopButton;