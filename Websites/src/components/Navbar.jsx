import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Active + hover underline animation
  const getLinkClass = (path) =>
    `relative transition-colors duration-300 ${
      location.pathname === path
        ? "text-yellow-400 font-semibold"
        : "text-gray-300 hover:text-yellow-400"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1
       after:w-full after:h-[2px] after:bg-yellow-400 after:scale-x-0
       after:origin-left after:transition-transform after:duration-300
       hover:after:scale-x-100`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 backdrop-blur-md ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-gradient-to-b from-gray-900 via-black to-gray-950 shadow-lg`}
    >
      <div className="flex items-center justify-between w-full px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="object-contain w-10 h-10" />
          <span className="text-white font-bold font-dancing text-2xl md:text-3xl">
            Mugi
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/passion" className={getLinkClass("/passion")}>
            Passion
          </Link>
          <Link to="/Profession" className={getLinkClass("/Profession")}>
            Profession
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-200 focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 shadow-lg text-white font-bold border-t border-gray-700 animate-slideDown">
          <div className="px-6 pt-4 pb-6 space-y-4 font-medium flex flex-col">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/passion"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400"
            >
              Passion
            </Link>
            <Link
              to="/Profession"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400"
            >
              Profession
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
