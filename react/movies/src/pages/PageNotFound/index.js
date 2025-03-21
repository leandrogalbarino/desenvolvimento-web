import error404 from "./error404.png"
import styles from "./PageNotFound.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
function PageNotFound() {
  return (
   <>
    <Header />
      <section className={styles.container}>
        <h2>Ops! Página não localizada!</h2>
        <img src={error404} alt="Logo de Página não localizada"></img>
      </section>
    <Footer />
   </>
  );
}

export default PageNotFound;