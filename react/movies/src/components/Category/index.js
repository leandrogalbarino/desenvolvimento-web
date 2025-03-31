// import Card from "../Card"
import styles from "./Category.module.css";
import videos from "../../json/videos.json";

export const categories = [
  "Geografia", "Como fazer e usar", "Astronomia e Geografia", "Climatologia, Meteorologia, Vegetação", "Geologia e Hidrografia"
]

export function filterCategory(index) {
  return videos.filter((video) => video.category === categories[index]);
}

function CardSection({ category, children }) {
  return (
    <section class={styles.container}>
      <h2>{category}</h2>
      <div className={styles.cards}>
        {children}
      </div>
    </section>
  )
}

export default CardSection;
