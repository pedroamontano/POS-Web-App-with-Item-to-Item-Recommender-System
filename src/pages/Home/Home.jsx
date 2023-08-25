import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";
import Feature from "../../components/feature";
function Home(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <Header price={totalPrice} />
      <ItemList setTotalPrice={setTotalPrice} />
      <Button className={"button__check-out"} text={"Checkout"} />
      <Feature />
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
