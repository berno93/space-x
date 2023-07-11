import { Link, useLocation } from 'react-router-dom';

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h2>Erreur 404</h2>
      <p>La page "{location.pathname}" est introuvable.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default NoMatch;
