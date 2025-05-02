import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css";
import videos from "../../json/videos.json"
import SearchVideoList from "../../components/SearchVideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Search() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          <h2>Pesquisar</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
      <ScrollToTopButton/>

    </>
  );
}

export default Search;