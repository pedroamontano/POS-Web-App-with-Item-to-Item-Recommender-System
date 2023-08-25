import "./App.scss";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Search from "./pages/Search/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isCartSelected, setIsCartSelected] = useState(true);
  const [isSearchSelected, setIsSearchSelected] = useState(false);

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleCartClick={handleCartClick}
              handleSearchClick={handleSearchClick}
              isCartSelected={isCartSelected}
              isSearchSelected={isSearchSelected}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              handleCartClick={handleCartClick}
              handleSearchClick={handleSearchClick}
              isCartSelected={isCartSelected}
              isSearchSelected={isSearchSelected}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
