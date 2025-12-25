import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaBoxOpen,
  FaLeaf,
  FaUsers,
  FaTshirt,
} from "react-icons/fa";
// Removed import { Link } from "react-router-dom"; to prevent TypeError

export default function Footer() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <footer className="bg-[#0f3a23] text-white relative overflow-hidden">
      {/* Decorative Element */}
      {/* <img
        src="/logo.jpeg"
        alt=""
        className="absolute right-0 top-10 w-64 opacity-40 pointer-events-none hidden md:block"
      /> */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-16 relative z-10">
        {/* LOGO + MINI ABOUT */}
        <div
          className={`
            transition-all duration-700 
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <div className="flex flex-col items-start gap-3 mb-4">
            <img src="/logo.jpeg" className="h-24" alt="Portusphere Global Trade LLP Logo" />
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Portusphere Global Trade LLP
              </h2>
              <span className="inline-block text-xs text-lime-300 mt-1">
                Fresh Produce, Textiles &amp; Agri Exports
              </span>
            </div>
          </div>
          <p className="text-gray-200 mt-4 text-sm">
            Trusted supplier & exporter of vegetables, fruits, spices, grains, and textile products from India.
            Direct from farmers and artisans. Certified quality. Global delivery.
          </p>

          {/* Optional: quick trust icons */}
          {/* <div className="flex gap-3 mt-5">
            <span title="Sustainable Farming" className="bg-[#184d32] p-2 rounded-full">
              <FaLeaf className="text-lime-400" size={20} />
            </span>
            <span title="APEDA Compliant" className="bg-[#184d32] p-2 rounded-full">
              <img src="/apeda-logo.png" alt="APEDA" className="w-5 h-5" />
            </span>
            <span title="Quality Controlled" className="bg-[#184d32] p-2 rounded-full">
              <img src="/haccp-logo.png" alt="HACCP" className="w-5 h-5" />
            </span>
          </div> */}
        </div>

        {/* QUICK LINKS */}
        <div
          className={`
            transition-all duration-700 delay-150
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <h3 className="text-xl font-extrabold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li>
              <a href="/" className="flex items-center gap-2 hover:text-lime-400 transition">
                <FaHome className="text-lg"/> Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center gap-2 hover:text-lime-400 transition">
                <FaUsers className="text-lg"/> About
              </a>
            </li>
            <li>
              <a href="/textile" className="flex items-center gap-2 hover:text-lime-400 transition">
                <FaTshirt className="text-lg" /> Textile &amp; Cloth Division
              </a>
            </li>
            <li>
              <a href="/products" className="flex items-center gap-2 hover:text-lime-400 transition">
                <FaBoxOpen className="text-lg"/> Products
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 hover:text-lime-400 transition">
                <FaEnvelope className="text-lg"/> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* KEY EXPORT PRODUCTS - SHOW BOTH AGRICULTURE AND TEXTILE */}
        <div
          className={`
            transition-all duration-700 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <h3 className="text-xl font-extrabold mb-6">Our Exports</h3>
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="font-semibold text-lime-300 mb-1 flex items-center gap-2 text-base">
                <FaLeaf className="inline text-lime-400" /> Agriculture &amp; Food Products
              </h4>
              <ul className="space-y-3 text-gray-200 text-sm">
                <li>
                  <a href="/products/fresh-vegetables" className="underline hover:text-lime-400 transition font-semibold">
                    Fresh Vegetables
                  </a>: Onion, Potato, Green Chilli, Lemon, Drumstick
                </li>
                <li>
                  <a href="/products/fresh-fruits" className="underline hover:text-lime-400 transition font-semibold">
                    Fresh Fruits
                  </a>: Mango, Pomegranate, Banana
                </li>
                <li>
                  <a href="/products/indian-spices" className="underline hover:text-lime-400 transition font-semibold">
                    Indian Spices
                  </a>: Turmeric, Chilli, Cumin, Coriander
                </li>
                <li>
                  <a href="/products/grains-pulses" className="underline hover:text-lime-400 transition font-semibold">
                    Grains & Pulses
                  </a>: Rice, Wheat, Dal
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lime-300 mb-1 flex items-center gap-2 text-base">
                <FaTshirt className="inline text-lime-400" /> Textile Products
              </h4>
              <ul className="space-y-3 text-gray-200 text-sm">
                <li>
                  <a href="/products/cotton-fabrics" className="underline hover:text-lime-400 transition font-semibold">
                    Cotton &amp; Blended Fabrics
                  </a>: Shirting, Suiting, Dyed/Printed Fabric
                </li>
                <li>
                  <a href="/products/traditional-textiles" className="underline hover:text-lime-400 transition font-semibold">
                    Traditional Textiles
                  </a>: Sarees, Dupattas, Jacquard, Handloom
                </li>
                <li>
                  <a href="/products/home-textiles" className="underline hover:text-lime-400 transition font-semibold">
                    Home Textile Materials
                  </a>: Bed Sheets, Curtains, Cushion Covers
                </li>
                <li>
                  <a href="/products/garments" className="underline hover:text-lime-400 transition font-semibold">
                    Garment-ready Products
                  </a>: Sarees, Kurtis, Stoles, Children's Wear
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div
          className={`
            transition-all duration-700 delay-450
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <h3 className="text-xl font-extrabold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex gap-2 items-start">
              <FaEnvelope className="mt-1 text-lime-400 shrink-0 text-lg" />
              <span>support@domain.com</span>
            </li>
            <li className="flex gap-2 items-start">
              <FaPhoneAlt className="mt-1 text-lime-400 shrink-0 text-lg" />
              <span>+91 95603 65050</span>
            </li>
            <li className="flex gap-2 items-start">
              <FaHome className="mt-1 text-lime-400 shrink-0 text-lg" />
              <span>
                B6/908, Supertech Eco Village-2,<br />
                Greater Noida West, India
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-8">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a462b] p-3 rounded-md hover:bg-lime-500 hover:text-white transition cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a462b] p-3 rounded-md hover:bg-lime-500 hover:text-white transition cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a462b] p-3 rounded-md hover:bg-lime-500 hover:text-white transition cursor-pointer"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a462b] p-3 rounded-md hover:bg-lime-500 hover:text-white transition cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative mt-10 border-t border-[#1e5535]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 text-gray-300 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0 flex flex-col ">
            <div>
              <span className="font-bold text-lime-400">
                Portusphere Global Trade LLP
              </span>{" "}
              | Fresh Indian Produce &amp; Textiles to the World
            </div>

            <div className="md:mt-0 text-gray-400">
              Made with passion by{" "}
              <a
                href="https://gowappily.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-300 font-semibold underline hover:text-lime-200"
              >
                GoWappily Infotech
              </a>.
            </div>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/terms" className="hover:text-white transition cursor-pointer">
              Terms &amp; Conditions
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#contact" className="hover:text-white transition cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
