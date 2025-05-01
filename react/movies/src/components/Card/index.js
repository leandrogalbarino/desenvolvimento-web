import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";

import IconFavorite from "./images/favorite.png"
import IconUnfavorite from "./images/unfavorite.png"
function Card({ id }) {

  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id);
  const ico = !isFavorite ? IconFavorite : IconUnfavorite;

  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img   src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.cover} />
      </Link>
      <figure className={styles.icon}>
        <img
          src={ico}
          alt="Favoritar vídeo"
          onClick={() => addFavorite({id})}
        />
      </figure>
    </section>
  );
}

export default Card;