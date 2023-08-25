import cartIcon from "../../assets/icons/outline/shopping bag.svg";
import searchIcon from "../../assets/icons/outline/search.svg";
import scanIcon from "../../assets/icons/outline/barcode.svg";
import storeIcon from "../../assets/icons/outline/store.svg";
import darkCartIcon from "../../assets/icons/filled/shopping bag.svg";
import darkSearchIcon from "../../assets/icons/filled/search.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className={` footer ${props.className}`}>
      <Link
        to={"/"}
        className="footer__sub-section"
        onClick={props.handleCartClick}
      >
        <img
          src={props.isCartSelected ? darkCartIcon : cartIcon}
          alt="cart logo"
          className="footer__image"
        />
        <p className="footer__text"> CART </p>
      </Link>

      <Link
        to={"/search"}
        className="footer__sub-section"
        onClick={props.handleSearchClick}
      >
        <img
          src={props.isSearchSelected ? darkSearchIcon : searchIcon}
          alt="search logo"
          className="footer__image"
        />
        <p className="footer__text"> SEARCH </p>
      </Link>

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
