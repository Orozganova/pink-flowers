import './Logo.css';
import {Link} from 'react-router-dom'
import logo from '../../img/pink-flowers.png'

function Logo() {
  return (
    <Link to="/" className='Logo'>
      <img src={logo} alt="Website logo" />
    </Link>
  );
}

export default Logo;