import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuMobWidthClass = menuOpen
    ? "w-[90%] py-10 px-3"
    : "w-0 overflow-hidden";

  const menuDeskClass = "menu-desk h-full flex items-center gap-5";
  const menuMobClass = `menu-mob bg-gray-800 ${menuMobWidthClass} h-[100vh] transition-all duration-[0.2s]  items-end flex flex-col flex-wrap gap-10 fixed z-9999 right-0 top-0`;

  const isMobile = useMediaQuery({ maxWidth: 815 });

  return (
    <header className="bg-gray-900 h-25 py-0 px-[10%] flex flex-wrap gap-[10%] relative">
      <div className="box-logo flex items-center">
        <Link to="/">
          <h1 className="logo">
            Cine <span>Portal</span>
          </h1>
        </Link>
      </div>
      {isMobile && (
        <button id="btn-open-menu-mob" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="size-8" />
        </button>
      )}

      {menuOpen && (
        <div
          className="darken fixed z-8888 left-0 top-0 w-[100vw] h-[100vh] bg-[#5c5c5c80]"
          onClick={() => {
            setMenuOpen(false);
          }}
        ></div>
      )}

      <nav className={isMobile ? menuMobClass : menuDeskClass}>
        {isMobile && (
          <button
            className="absolute left-1 top-1"
            onClick={() => setMenuOpen(false)}
          >
            <XMarkIcon className="size-8" />
          </button>
        )}
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/trending?mediaType=movie"
            onClick={() => setMenuOpen(false)}
          >
            Filmes
          </Link>
        </li>
        <li>
          <Link to="/trending?mediaType=tv" onClick={() => setMenuOpen(false)}>
            Séries
          </Link>
        </li>
      </nav>
      {/*Menu Desktop */}
    </header>
  );
};

export default Header;
