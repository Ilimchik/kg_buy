import './Menu.css';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='MenuContent flex'>
        <li className='active'>
          <Link to="/">Home</Link>
        </li>
        <li className='active'>
          <Link to="/about">About</Link>
        </li>
        <li className='active'>
          <Link to="/delivery">Delivery</Link>
        </li>
        <li className='active'>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;