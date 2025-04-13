import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="min-h-30 bg-slate-900 flex flex-wrap justify-center items-center gap-30">
      <div className="box-logo">
        <h1 className="logo">
          Cine <span>Portal</span>
        </h1>
      </div>
      <button className="">
        <Bars3Icon className="size-8" />
      </button>
      <div className="box-menu">
        <nav className="menu-desk flex gap-5">
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
        <nav className="menu-mob flex gap-5">
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
