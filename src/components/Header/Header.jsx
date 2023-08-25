import './Header.scss';

function Header({ price }) {
  return (
    <div className='header'>
      <p>Subtotal <span className='price'>${price.toFixed(2)}</span></p>
    </div>
  );
}

export default Header;
