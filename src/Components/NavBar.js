import { useEffect, useState } from "react";
import { FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";

export default function Navbar() {
  const [showTop, setShowTop] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* TOP BAR */}
      <div
        className={`bg-green-900 text-white text-sm transition-all duration-300 px-6 
        ${showTop ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"}
      `}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>🏢 Reg add: B6/907, Supertech Eco Village -2, Greater Noida West</span>
            <span>✉️ Email: </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#">Contact</a>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 ml-4">
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
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpeg"
              alt="logo"
              className="h-16"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-green-900">Portusphare Global Trade LLP</span>
            </div>
          </div>

          {/* MENU LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <a className="hover:text-green-700" href="#">Home</a>
            <a className="hover:text-green-700" href="#">About</a>
            <a className="hover:text-green-700" href="#">Products</a>
            <a className="hover:text-green-700" href="#">Contact</a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            {/* Search icon */}
            <FaSearch className="w-6 h-6 text-green-900 cursor-pointer" />

            {/* CTA Button */}
            <button className="bg-lime-500 hover:bg-lime-600 transition text-white px-6 py-3 rounded-md font-semibold">
              Get A Quote
            </button>

            {/* Contact */}
            <div className="hidden md:flex items-center gap-3">
              <FaRegComments className="w-8 h-8 text-green-900" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-500">Contact</span>
                <span className="font-bold text-gray-700">+91 95603 65050</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
