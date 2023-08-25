import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemList from "../../components/ItemComponent/ItemList";

function Home() {
  return (
    <div>
      <Header />
      <ItemList />
      <Button className={"button__check-out"} text={"Checkout"} />
      <Footer />
    </div>
  );
}

export default Home;
