import cartIcon from "../../assets/icons/outline/shopping bag.svg";
import searchIcon from "../../assets/icons/outline/search.svg";
import scanIcon from "../../assets/icons/outline/barcode.svg";
import storeIcon from "../../assets/icons/outline/store.svg";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__sub-section">
        <img src={cartIcon} alt="cart logo" className="footer__image" />
        <p className="footer__text"> CART </p>
      </div>

      <div className="footer__sub-section">
        <img src={searchIcon} alt="search logo" className="footer__image" />
        <p className="footer__text"> SEARCH </p>
      </div>

      <div className="footer__sub-section">
        <img src={scanIcon} alt="scan logo" className="footer__image" />
        <p className="footer__text"> SCAN </p>
      </div>

      <div className="footer__sub-section">
        <img src={storeIcon} alt="store logo" className="footer__image" />
        <p className="footer__text"> STORE </p>
      </div>
    </div>
  );
}

export default Footer;
