import { useEffect, useState, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

// Utility to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Only textile images for the hero section
const heroImagesRaw = [
  {
    src: "/textile.jpg",
    alt: "Vibrant Indian textiles and fabrics displayed for global markets by Portusphere Global Trade LLP",
    division: "Textile",
  },
  {
    src: "/textile.webp",
    alt: "Modern Indian textile manufacturing - looms and quality fabrics for export around the world",
    division: "Textile",
  },
  {
    src: "/textile2.webp",
    alt: "Premium cotton and blended textile rolls ready for shipment at Portusphere Global Trade LLP",
    division: "Textile",
  },
  {
    src: "/textile3.jpg",
    alt: "Indian traditional and contemporary textiles exported to global destinations by Portusphere",
    division: "Textile",
  },
  {
    src: "/textile.jpg",
    alt: "High-quality Indian textile fabrics prepared for international delivery",
    division: "Textile",
  },
  {
    src: "/textile2.webp",
    alt: "Export-grade cotton yarns and textiles provided worldwide by Portusphere",
    division: "Textile",
  },
  {
    src: "/textile3.jpg",
    alt: "Cutting-edge textile manufacturing and finishing at Portusphere Global Trade LLP",
    division: "Textile",
  },
];

// Shuffle textile images on each page load
const heroImages = shuffleArray(heroImagesRaw);

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  // Hero image carousel state
  const [imgIdx, setImgIdx] = useState(0);
  const [imgDirection, setImgDirection] = useState("forward");
  const [imgChanging, setImgChanging] = useState(false);
  const imgTimeout = useRef();

  // Appear animation on mount
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Auto-advance hero image
  useEffect(() => {
    if (imgChanging) return;
    imgTimeout.current = setTimeout(() => {
      handleImgChange(1);
    }, 3500);
    return () => clearTimeout(imgTimeout.current);
    // eslint-disable-next-line
  }, [imgIdx, imgChanging]);

  function handleImgChange(dir) {
    setImgChanging(true);
    setImgDirection(dir === 1 ? "forward" : "backward");
    setTimeout(() => {
      setImgIdx((prev) =>
        dir === 1
          ? (prev + 1) % heroImages.length
          : (prev - 1 + heroImages.length) % heroImages.length
      );
      setTimeout(() => setImgChanging(false), 320);
    }, 10);
  }

  // Social media icons/links
  const socialIcons = [
    {
      label: "Facebook",
      icon: <FaFacebookF className="w-4 h-4 group-hover:text-blue-600" />,
      link: "https://facebook.com",
      color: "hover:bg-blue-50 hover:text-blue-600",
    },
    {
      label: "Instagram",
      icon: <FaInstagram className="w-4 h-4 group-hover:text-pink-500" />,
      link: "https://instagram.com",
      color: "hover:bg-pink-50 hover:text-pink-500",
    },
    {
      label: "Twitter",
      icon: <FaTwitter className="w-4 h-4 group-hover:text-sky-500" />,
      link: "https://twitter.com",
      color: "hover:bg-sky-50 hover:text-sky-500",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp className="w-4 h-4 group-hover:text-green-600" />,
      link: "https://wa.me/919560365050",
      color: "hover:bg-green-50 hover:text-green-600",
    },
  ];

  // Always textile
  const currentDivision = "Textile";

  // Textile division content only
  const division = {
    badge: {
      text: "Textile Division",
      color: "bg-lime-400 text-lime-600",
    },
    heading: (
      <>
        Welcome to <span className="text-lime-600 font-serif">Portusphere Global Trade LLP</span>
      </>
    ),
    description: (
      <>
        Discover India’s finest textiles with Portusphere Global Trade LLP. Our <b>Textile Division</b> expertly sources, manufactures, and delivers a diverse array of fabrics, garments, home textiles, and cotton yarns to markets worldwide. Each product showcases the depth of Indian artistry, modern weaving, and uncompromising quality.
        <br className="hidden xs:inline" />
        <span className="inline-block mt-2">
          Partner with us to access world-class textile solutions — where tradition meets innovation for every global need.
        </span>
      </>
    ),
    ctas: [
      {
        href: "/contact-us",
        className:
          "bg-lime-500 hover:bg-lime-600 active:bg-lime-700 transition text-white font-semibold px-5 xs:px-7 sm:px-8 py-3 xs:py-4 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-300 duration-400 text-base w-full xs:w-auto text-center",
        text: "Contact Us →",
      },
      {
        href: "/textile",
        className:
          "bg-white border-2 border-lime-500 text-lime-600 hover:bg-lime-100 hover:border-lime-600 transition rounded-lg font-semibold px-5 xs:px-7 py-3 xs:py-4 shadow-md duration-400 text-base w-full xs:w-auto text-center",
        text: "Explore Textile Products",
      },
    ],
  };

  return (
    <section className="relative w-full min-h-[70vh] xs:min-h-[80vh] sm:min-h-[90vh] md:min-h-[97vh] mt-16  xs:mt-28 sm:mt-28 bg-gradient-to-b from-green-50 via-lime-50 to-white flex items-center overflow-hidden">
      {/* Background Decorative Circle - responsive sizing and placing */}
      <div
        className={`
          absolute left-[-50vw] xs:left-[-30vw] sm:left-[-13vw] md:left-[-11%] top-1/2 -translate-y-1/2 
          w-[800px] xs:w-[950px] sm:w-[1100px] md:w-[1300px] 
          h-[800px] xs:h-[950px] sm:h-[1100px] md:h-[1300px] 
          rounded-full 
          bg-gradient-to-br from-lime-300/70 via-lime-100/80 to-white
          shadow-2xl
          transition-all duration-1000 ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        aria-hidden
      />

      {/* Accent Leaf - visually decorative svg */}
      <svg
        width="70"
        height="45"
        className="absolute top-[7%] right-[3%] xs:top-[12%] xs:right-[10%] sm:top-[14%] sm:right-[18%] opacity-20 z-0"
        viewBox="0 0 110 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M90 80C100 40 10 80 30 30C50 -10 100 20 100 60"
          stroke="#94C973"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Left Social Bar (md+) */}
      <div className="absolute left-2 xs:left-4 bottom-1/2 translate-y-1/2 hidden md:flex flex-col gap-12 xl:gap-20 text-gray-500 z-20">
        {socialIcons.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className={`group flex items-center gap-2
              rounded-full shadow-none transition
              -rotate-90
              px-2 py-2 bg-transparent ${item.color.replace(/bg-[^\s]+/g, "")}`}
          >
            <span className="flex items-center">{item.icon}</span>
            <span className="hidden xl:inline ml-1 text-sm font-medium tracking-wider group-hover:font-semibold">
              {item.label}
            </span>
          </a>
        ))}
      </div>
      {/* Social Bar for mobile - bottom center */}
      {/* ...omitted for brevity... */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-10 md:mx-20 px-2 xs:px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
        {/* Textual Content */}
        <div
          className={`
            flex-1 flex flex-col gap-5 sm:gap-6 md:gap-7
            w-full max-w-[540px] sm:max-w-xl md:pt-10 xs:pt-14 md:pt-0
            transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          `}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-7 sm:w-8 h-1 rounded-md inline-block ${division.badge.color.split(" ")[0]}`} />
            <span className={`uppercase text-[11px] sm:text-xs tracking-wider font-semibold ${division.badge.color.split(" ").slice(1).join(" ")}`}>
              {division.badge.text}
            </span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow-sm font-serif">
            {division.heading}
          </h1>
          <p className="text-base xs:text-lg text-gray-700/90 max-w-lg">{division.description}</p>
          <div className="flex flex-col xs:flex-row gap-4 mt-4 w-full">
            {division.ctas.map((cta, idx) => (
              <a key={idx} href={cta.href} className={cta.className || cta.class}>
                {cta.text}
              </a>
            ))}
          </div>
        </div>

        {/* Hero Image With Decor */}
        <div
          className={`
            relative group items-end
            mt-4 md:mt-0
            w-full flex-1 flex justify-center md:justify-end md:block
            transition-all duration-700 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {/* Floating leaf graphic on top right of image */}
          <svg
            width="34"
            height="20"
            className="absolute -top-4 -right-3 sm:-top-6 sm:-right-8 drop-shadow pointer-events-none"
            viewBox="0 0 52 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M10 28C30 18 38 23 46 6"
              stroke="#CDE393"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Animated image carousel */}
          <div className="relative w-[90%] aspect-[1/1] select-none overflow-hidden rounded-2xl flex items-center justify-center">
            {/* Outgoing image */}
            {imgChanging && (
              <img
                key={imgIdx + "-out"}
                src={heroImages[imgIdx]?.src}
                alt={heroImages[imgIdx]?.alt}
                aria-hidden
                className={`
                  absolute left-0 top-0 w-full h-full object-cover rounded-2xl
                  border-4 border-white/80
                  shadow-2xl
                  transition-all duration-300 ease-in
                  ${imgDirection === "forward"
                    ? "opacity-0 scale-90 translate-x-12 z-10"
                    : "opacity-0 scale-90 -translate-x-12 z-10"}
                `}
                style={{ pointerEvents: "none" }}
              />
            )}
            {/* Incoming image */}
            <img
              key={imgIdx}
              src={heroImages[imgIdx].src}
              alt={heroImages[imgIdx].alt}
              className={`
                absolute left-0 top-0 w-full h-full object-cover rounded-2xl border-4 border-white/80 shadow-2xl
                transition-all duration-300 ease-in-out
                ${imgChanging
                  ? imgDirection === "forward"
                    ? "opacity-100 scale-100 translate-x-0 z-20 animate-slide-in-right"
                    : "opacity-100 scale-100 translate-x-0 z-20 animate-slide-in-left"
                  : "opacity-100 scale-100 translate-x-0 z-30"}
                group-hover:scale-105
              `}
              style={{
                opacity: imgChanging ? 1 : 1,
                pointerEvents: imgChanging ? "none" : "auto",
              }}
              loading="eager"
            />
            {/* Decorative reflection */}
            <div className="absolute bottom-0 left-0 w-[50%] xs:w-[60%] sm:w-[70%] h-7 sm:h-10 rounded-full bg-gradient-to-tr from-white/50 via-lime-100/40 to-white/0 blur-lg opacity-60 -translate-y-2 pointer-events-none" />
            {/* Small carousel dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {heroImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (imgIdx !== idx && !imgChanging) {
                      handleImgChange(idx > imgIdx || (imgIdx === heroImages.length - 1 && idx === 0) ? 1 : -1);
                      setTimeout(() => setImgIdx(idx), 30);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full border border-lime-300 transition bg-white
                    outline-none ring-0
                    ${imgIdx === idx
                      ? "bg-lime-400 scale-125 shadow-md border-lime-500"
                      : ""}
                  `}
                  aria-label={`Select hero image ${idx + 1} (Textile)`}
                  style={{ pointerEvents: imgIdx === idx || imgChanging ? "none" : "auto" }}
                />
              ))}
            </div>
            {/* Division indicator, always Textile */}
            <div
              className="absolute top-2 right-3 xs:right-4 text-xs px-3 py-1 rounded-full bg-white/70 border font-semibold shadow-sm tracking-wide border-lime-400 text-lime-600 font-serif"
            >
              Textile
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls - hide on mobile; show from sm and up */}
      <div className="hidden sm:flex absolute right-2 xs:right-8 md:right-16 top-1/2 -translate-y-1/2 flex-col gap-3 md:gap-4 z-20">
        <button
          aria-label="Previous"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-lime-200 hover:bg-lime-100 flex items-center justify-center shadow-lg transition transform active:scale-95 group focus:outline-none focus:ring-2 focus:ring-lime-200"
          onClick={() => !imgChanging && handleImgChange(-1)}
          disabled={imgChanging}
        >
          <FaArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <button
          aria-label="Next"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition transform active:scale-95 group focus:outline-none focus:ring-2 focus:ring-lime-300 bg-lime-500 hover:bg-lime-600"
          onClick={() => !imgChanging && handleImgChange(1)}
          disabled={imgChanging}
        >
          <FaArrowRight className="w-5 h-5 text-white drop-shadow" />
        </button>
      </div>

      {/* Extra CSS for custom animation (tailwind doesn't provide translate-x-* transitions with animate) */}
      <style jsx="true">{`
        @keyframes slideInRightHero {
          0% { opacity: 0; transform: scale(0.95) translateX(3.5rem);}
          100% { opacity: 1; transform: scale(1) translateX(0);}
        }
        @keyframes slideInLeftHero {
          0% { opacity: 0; transform: scale(0.95) translateX(-3.5rem);}
          100% { opacity: 1; transform: scale(1) translateX(0);}
        }
        .animate-slide-in-right {
          animation: slideInRightHero 0.32s cubic-bezier(0.6,0.15,0.25,1) both;
        }
        .animate-slide-in-left {
          animation: slideInLeftHero 0.32s cubic-bezier(0.6,0.15,0.25,1) both;
        }
      `}</style>
    </section>
  );
}
