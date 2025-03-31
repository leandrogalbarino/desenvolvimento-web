import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Carousel from "../../components/Carousel";
import Category, {categories, filterCategory} from "../../components/Category"
import Card from "../../components/Card";
// import { useState } from "react";

function Home() {

  // let name = '';
  // function getName(event) {
  //   setName(event.target.value);
  // }
  // // Hook
  // const [name, setName] = useState();

  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {
          categories.map((category, index) => {
            return (
              <Category category={category}>
                <Carousel>
                  {filterCategory(index).map(({id}) => <Card id={id} key={id} />)}
                </Carousel>
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
