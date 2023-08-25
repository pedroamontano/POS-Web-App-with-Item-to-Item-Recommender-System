import cartIcon from "../../../assets/icons/outline/shopping bag.svg";
import searchIcon from "../../../assets/icons/outline/search.svg";
import scanIcon from "../../../assets/icons/outline/barcode.svg";
import storeIcon from "../../../assets/icons/outline/store.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__cart-and-search">
        <div className="footer__cart">
          <img src={cartIcon} alt="cart logo" className="footer__image" />
          <p className="footer__text"> CART </p>
        </div>

        <div className="footer__search">
          <img src={searchIcon} alt="search logo" />
          <p className="footer__text"> SEARCH </p>
        </div>
      </div>
      <div className="footer__scan-and-store">
        <div className="footer__scan">
          <img src={scanIcon} alt="scan logo" />
          <p className="footer__text"> SCAN </p>
        </div>
        <div className="footer__store">
          <img src={storeIcon} alt="store logo" />
          <p className="footer__text"> STORE </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
