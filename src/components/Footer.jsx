import footerLogo from "../assets/img/logo-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 mt-20 flex flex-col gap-2 justify-center items-center border-t-2 border-s-gray-300">
      <Link to="/">
        <img src={footerLogo} alt="Cine Portal" className="max-h-10" />
      </Link>

      <div>© 2025 - Cine Portal</div>
    </footer>
  );
};

export default Footer;
