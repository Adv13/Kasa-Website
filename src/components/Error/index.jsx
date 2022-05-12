import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="wrapper">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas</h2>
      <div className="err-back">
        <Link className="backlink" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;