import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id='root'>
      <header>
        <nav>
          <h1>KASA</h1>
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='about'>A propos</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
