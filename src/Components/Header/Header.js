import './Header.css';
import Menu from '../Nav/Nav';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <div className="Buttons flex">
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;