import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category, {categories, filterCategory} from "../../components/Category"
import Card from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {
          categories.map((category, index) => {
            return (
              <Category category={category}>
                {filterCategory(index).map(({id}) => <Card id={id} key={id} />)}
              </Category>
            );
          })
        }
      </Container>
      <Footer />
    </>
  );
}

export default Home;
