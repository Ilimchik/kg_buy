import './Burger.css'
import { Link } from 'react-router-dom'

export default function Burger() {


    return (
        <div className="burger">
            <input type="checkbox" id="menu-toggle" checked />
            <label for="menu-toggle"></label>
            <ul id="menu">
                <nav className='MenuBurger'>
                    <ul className='MenuContent'>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Delivery</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </ul>
        </div>
    )

}