import logo from "../assets/img/logo-2.png";

const Footer = () => {
  return (
    <footer className="p-10 mt-20 flex flex-col gap-2 justify-center items-center border-t-2 border-s-gray-300">
      <img src={logo} alt="Cine Portal" className="max-h-10" />
      <div>© 2025 - Cine Portal</div>
    </footer>
  );
};

export default Footer;
