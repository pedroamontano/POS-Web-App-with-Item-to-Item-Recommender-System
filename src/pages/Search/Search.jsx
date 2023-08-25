import Footer from "../../components/Footer/Footer";
import searchPage from "../../assets/images/Item Search, Results.png";
import "./Search.scss";

function Search(props) {
  return (
    <div className="search">
      <img src={searchPage} alt="search fake page" className="search__image" />
      <Footer
        handleCartClick={props.handleCartClick}
        handleSearchClick={props.handleSearchClick}
        isCartSelected={props.isCartSelected}
        isSearchSelected={props.isSearchSelected}
        className={`footer__addition`}
      />
    </div>
  );
}

export default Search;
