import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import IconFavorite from "./images/favorite.png"
import IconUnfavorite from "./images/unfavorite.png"
function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img   src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.cover} />
      </Link>
      <figure className={styles.icon}>
        <img src={IconFavorite} alt="Favoritar vídeo"></img>
      </figure>
    </section>
  );
}

export default Card;