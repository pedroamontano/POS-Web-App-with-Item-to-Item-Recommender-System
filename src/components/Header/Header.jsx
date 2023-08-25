function Header({ price }) {
  return (
    <div>
      <h2>${price.toFixed(2)}</h2>
    </div>
  );
}

export default Header;
