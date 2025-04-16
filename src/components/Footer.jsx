import footerLogo from "../assets/img/logo-transparent.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  mt-20 px-[5%] ">
      <div className=" py-10 border-t-[1px] border-gray-900 flex flex-col gap-2 justify-center items-center">
        <Link to="/" className="">
          <img src={footerLogo} alt="Cine Portal" className="max-h-10 " />
        </Link>
        <div>© 2025 - Cine Portal</div>
      </div>
    </footer>
  );
};

export default Footer;
