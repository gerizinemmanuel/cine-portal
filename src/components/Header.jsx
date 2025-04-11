import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-30 bg-slate-900 flex justify-center items-center gap-30">
      <div className="box-logo">
        <h1 className="logo">
          Cine <span>Portal</span>
        </h1>
      </div>

      <div className="box-menu">
        <nav className="flex gap-5">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/">Filmes</Link>
          </li>
          <li>
            <Link to="/">Séries</Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
