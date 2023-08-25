import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";
function Home() {
  const [isCartSelected, setIsCartSelected] = useState(true);
  const [isSearchSelected, setIsSearchSelected] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCartClick = () => {
    console.log("click detected");
    setIsCartSelected(true);
    setIsSearchSelected(false);
  };

  const handleSearchClick = () => {
    setIsCartSelected(false);
    setIsSearchSelected(true);
  };
  return (
    <div>
      <Header price={totalPrice}/>
      <ItemList setTotalPrice={setTotalPrice}/>
      <Button className={"button__check-out"} text={"Checkout"} />
      <Footer
        handleCartClick={handleCartClick}
        handleSearchClick={handleSearchClick}
        isCartSelected={isCartSelected}
        isSearchSelected={isSearchSelected}
      />
    </div>
  );
}

export default Home;
