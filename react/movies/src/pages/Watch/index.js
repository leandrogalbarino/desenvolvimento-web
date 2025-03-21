import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

function Watch() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.assistir}>
          <iframe width="854" height="480x" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=ll8JjsIKlnINXlzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch; 