import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [menuMobWidthClass, setMenuMobWidthClass] = useState(
    " w-0 overflow-hidden "
  );
  const menuDeskClass = "menu-desk h-full flex items-center gap-5";
  const menuMobClass = `menu-mob bg-gray-600${menuMobWidthClass}h-[100vh] transition-all duration-[0.2s]  items-end flex flex-col flex-wrap gap-10 absolute z-9999 right-0 top-0`;
  return (
    <header className="bg-gray-900 h-25 py-0 px-10 flex flex-wrap justify-center gap-[20%] relative">
      <div className="box-logo flex items-center">
        <Link to="/">
          <h1 className="logo">
            Cine <span>Portal</span>
          </h1>
        </Link>
      </div>
      <button
        id="btn-open-menu-mob"
        className="hidden"
        onClick={() => setMenuMobWidthClass(" w-[90%] py-10 px-3 ")}
      >
        <Bars3Icon className="size-8" />
      </button>

      <nav className={menuDeskClass}>
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
      {/*Menu Desktop */}

      <nav className={menuMobClass}>
        <button
          className="absolute left-1 top-1"
          onClick={() => setMenuMobWidthClass(" w-0 overflow-hidden ")}
        >
          <XMarkIcon className="size-8" />
        </button>
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
      {/*Menu Mobile */}
    </header>
  );
};

export default Header;
