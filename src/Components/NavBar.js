import { useEffect, useState } from "react";
import { FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";

export default function Navbar() {
  const [showTop, setShowTop] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger initial animation once component mounts
    setTimeout(() => setAnimate(true), 100);

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // Scrolling down → hide top bar
        setShowTop(false);
      } else {
        // Scrolling up → show top bar
        setShowTop(true);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* TOP BAR */}
      <div
        className={`bg-green-900 hidden md:block text-white text-xs sm:text-sm transition-all duration-300 px-3 xs:px-4 sm:px-6
        ${showTop ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"}
      `}
      >
        <div className="max-w-7xl flex mx-auto h-full  flex-col sm:flex-row justify-between items-center justify-between gap-y-2">
          <div className="flex flex-wrap items-center gap-3 xs:gap-4 sm:gap-6 text-[11px] sm:text-sm  xs:w-auto justify-center xs:justify-start">
            <span className="whitespace-nowrap">🏢 Reg add: B6/907, Supertech Eco Village -2, Greater Noida West</span>
            <span className="whitespace-nowrap hidden xs:inline">✉️ Email: </span>
          </div>
          <nav className="hidden md:flex items-center gap-3 xs:gap-4 sm:gap-6 text-white/80">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition"
              >
                <FaFacebookF className="w-5 h-5 text-white hover:text-blue-500 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition"
              >
                <FaTwitter className="w-5 h-5 text-white hover:text-blue-400 transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition"
              >
                <FaLinkedinIn className="w-5 h-5 text-white hover:text-blue-700 transition" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`
          bg-white shadow transition-all duration-700 
          ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
        `}
      >
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 py-2 sm:py-2 flex items-center justify-between relative">
          {/* LOGO SECTION */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/logo.jpeg"
              alt="logo"
              className="h-12 xs:h-14 sm:h-16 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base xs:text-lg sm:text-xl font-bold text-green-900 whitespace-nowrap">Portusphere Global Trade LLP</span>
            </div>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden flex items-center z-40">
            <button
              className=" rounded focus:outline-none text-green-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen
                ? <FaTimes className="w-7 h-7" />
                : <FaBars className="w-7 h-7" />
              }
            </button>
          </div>

          {/* MENU LINKS - Desktop */}
          <nav className="hidden md:flex items-center gap-6 xs:gap-8 sm:gap-10 text-gray-700 font-medium">
            <a className="hover:text-green-700" href="/">Home</a>
            <a className="hover:text-green-700" href="/about">About</a>
            <a className="hover:text-green-700" href="/products">Products</a>
            <a className="hover:text-green-700" href="/contact-us">Contact</a>
          </nav>

          {/* ACTIONS - Desktop */}
          <div className="hidden md:flex items-center gap-4 xs:gap-5 sm:gap-6">
            {/* Search icon */}
            <FaSearch className="w-5 h-5 sm:w-6 sm:h-6 text-green-900 cursor-pointer" />

            {/* CTA Button */}
            <button className="bg-lime-500 hover:bg-lime-600 transition text-white text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold">
              Get A Quote
            </button>

            {/* Contact */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              <FaRegComments className="w-7 h-7 sm:w-8 sm:h-8 text-green-900" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] xs:text-xs text-gray-500">Contact</span>
                <span className="font-bold text-gray-700 text-xs xs:text-sm">+91 95603 65050</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            fixed inset-0 bg-black/40 transition-opacity duration-300 z-30
            ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            md:hidden
          `}
          onClick={() => setMobileMenuOpen(false)}
        />
       <nav
  className={`
    fixed top-0 right-0 w-5/6 xs:w-2/3 sm:w-1/2 max-w-xs 
    h-screen shadow-xl z-40 transform
    transition-transform duration-300 md:hidden
    py-10 px-6 flex flex-col gap-8 overflow-y-auto bg-white/95
    ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
  aria-label="Mobile menu"
 
>

          {/* Logo at top of mobile menu */}
          <div className="flex justify-between items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="logo" className="h-10" />
            <span className="font-bold text-green-900 text-lg">Portusphere</span>
            </div>
           
            <div className="md:hidden flex items-center z-40">
            <button
              className="p-2 rounded focus:outline-none text-green-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen
                && <FaTimes className="w-7 h-7" />
              }
            </button>
          </div>
          </div>
          <a onClick={()=>setMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium hover:text-green-700" href="/">Home</a>
          <a onClick={()=>setMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium hover:text-green-700" href="/about">About</a>
          <a onClick={()=>setMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium hover:text-green-700" href="/products">Products</a>
          <a onClick={()=>setMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium hover:text-green-700" href="/contact-us">Contact</a>
          <hr className="my-2"/>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-md font-semibold text-base transition shadow mt-2">
            Get A Quote
          </button>
          <div className="flex items-center gap-3 mt-4">
            <FaRegComments className="w-7 h-7 text-green-900" />
            <span className="font-bold text-gray-700 text-sm">+91 95603 65050</span>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 text-gray-500 hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-gray-500 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6 text-gray-500 hover:text-blue-700" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
