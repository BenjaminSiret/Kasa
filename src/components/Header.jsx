import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div>
      <header id='header'>
        <nav className='navbar'>
          <img
            src={logo}
            alt='logo'
          />
          <div className='navLinks'>
            <NavLink
              to='/'
              className='navLink'
              activeClassName='active'
            >
              Accueil
            </NavLink>
            <NavLink
              to='about'
              className='navLink'
              activeClassName='active'
            >
              A propos
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}
