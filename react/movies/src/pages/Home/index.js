import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category, {categories, filterCategory} from "../../components/Category"
import Card from "../../components/Card";
import { useState } from "react";

function Home() {

  // let name = '';
  function getName(event) {
    setName(event.target.value);
  }

  const [name, setName] = useState();

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        <input
          type="text"
          placeholder="Pesquisa"
          onChange={getName}
        />
        <h2>{name}</h2>
        {/* {
          categories.map((category, index) => {
            return (
              <Category category={category}>
                {filterCategory(index).map(({id}) => <Card id={id} key={id} />)}
              </Category>
            );
          })
        } */}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
