import Header from "./components/Header";
import Footer from "./components/Footer";
// import styles from "./App.module.css"
import Banner from "./components/Banner";
import Container from "./components/Container";
import videos from "./json/videos.json";
import Category from "./components/Category"
import Card from "./components/Card";

const categories = [
  "Geografia", "Como fazer e usar", "Astronomia e Geografia", "Climatologia, Meteorologia, Vegetação", "Geologia e Hidrografia"
]

function filterCategory(category) {
  return videos.filter((video) => video.category === category);
}

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {
          categories.map((category) => {
            return (
              <Category category={category}>
                {filterCategory(category).map((video) => <Card id={video.id} key={video.id} />)}
              </Category>
            );
          })
        }
      </Container>
      <Footer />
    </>
  );
}

export default App;
