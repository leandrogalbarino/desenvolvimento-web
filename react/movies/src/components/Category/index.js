// import Card from "../Card"
import styles from "./Category.module.css"

function CardSection({ category, children }) {
  return (
    <section class={styles.container}>
      <h2>{category}</h2>
      <div className={styles.cards}>
        {children}
        
        
        {// videos.filter((video) => video.category === category)
          //   .map((video) => <Card id={video.id} key={video.id} />)
        }
      </div>
    </section>
  )
}

export default CardSection;
