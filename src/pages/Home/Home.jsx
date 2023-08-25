import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemList from "../../components/ItemList/ItemList";
function Home(props) {
  return (
    <div>
      <Header />
      <ItemList />
      <Button className={"button__check-out"} text={"Checkout"} />
      <Footer
        handleCartClick={props.handleCartClick}
        handleSearchClick={props.handleSearchClick}
        isCartSelected={props.isCartSelected}
        isSearchSelected={props.isSearchSelected}
      />
    </div>
  );
}

export default Home;
