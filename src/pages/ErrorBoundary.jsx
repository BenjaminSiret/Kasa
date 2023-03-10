import { Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);

  return (
    <div id='not-found-page'>
      <h2 className='error-code'>404</h2>
      <p className='error-text'>Oups! La page que vous demandez n'existe pas</p>
      <Link
        to='/'
        className='home-link'
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
