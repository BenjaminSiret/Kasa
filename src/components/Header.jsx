import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id='header'>
      <nav className='navbar'>
        <img
          src={logo}
          alt='logo'
          className='logo'
        />
        <div className='navLinks'>
          <NavLink
            to='/'
            className='navLink'
          >
            Accueil
          </NavLink>
          <NavLink
            to='about'
            className='navLink'
          >
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
