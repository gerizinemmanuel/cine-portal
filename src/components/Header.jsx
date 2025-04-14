import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [menuMobWidthClass, setMenuMobWidthClass] = useState(
    " w-0 overflow-hidden "
  );
  const menuDeskClass = "menu-desk h-full flex items-center gap-5";
  const menuMobClass = `menu-mob z-9999 bg-gray-600${menuMobWidthClass}transition-all duration-[0.2s] py-10 px-3 items-end flex flex-col flex-wrap gap-10 absolute right-0 top-0`;
  return (
    <header className="bg-slate-900 h-16 py-0 px-10 flex flex-wrap justify-center gap-[20%] relative">
      <div className="box-logo flex items-center">
        <h1 className="logo">
          Cine <span>Portal</span>
        </h1>
      </div>
      <button
        id="btn-open-menu-mob"
        className="hidden"
        onClick={() => setMenuMobWidthClass(" w-[90%] ")}
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
