import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";
import headerLogo from "../assets/img/logo-transparent.png";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuMobWidthClass = menuOpen
    ? "w-[90%] py-10 px-3"
    : "w-0 overflow-hidden";

  const menuDeskClass = "menu-desk h-full flex items-center gap-5";
  const menuMobClass = `menu-mob bg-gray-800 ${menuMobWidthClass} h-[100vh] transition-all duration-[0.2s]  items-end flex flex-col flex-wrap gap-10 fixed z-9999 right-0 top-0`;

  const isMobile = useMediaQuery({ maxWidth: 815 });

  return (
    <header className={`${props.className}`}>
      <div className="darken-top bg-[#030712b3] h-25 py-0 px-[5%] flex items-center flex-wrap gap-[10%] relative">
        <div className="box-logo flex items-center">
          <Link to="/">
            <img src={headerLogo} alt="Cine Portal" className="max-h-10" />
          </Link>
        </div>
        {isMobile && (
          <button
            id="btn-open-menu-mob"
            className="max-h-fit"
            onClick={() => setMenuOpen(true)}
          >
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

        <nav className={`${isMobile ? menuMobClass : menuDeskClass} font-bold`}>
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
            <Link
              to="/trending?mediaType=tv"
              onClick={() => setMenuOpen(false)}
            >
              Séries
            </Link>
          </li>
        </nav>
        {/*Menu Desktop */}
      </div>
    </header>
  );
};

export default Header;
