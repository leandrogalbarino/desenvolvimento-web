import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import videos from "../../json/videos.json";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Watch() {
  
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === params.id;
  });
  if(!video){ return <PageNotFound />}

  return (
    <>
      <Header />
      <Container>
        <section className={styles.assistir}>
          <iframe
            width="854" height="480x"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
      </Container>
      <Footer />
      <ScrollToTopButton/>

    </>
  );
}

export default Watch; 