import { NavLink, Outlet } from "react-router-dom";

import logo from "../assets/logo.png";
import logoBw from "../assets/logoBw.png";

export default function Root() {
  return (
    <div id='root'>
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
      <main>
        <Outlet />
      </main>
      <footer id='footer'>
        <img
          src={logoBw}
          alt='logo'
          className='footer-logo'
        />
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
