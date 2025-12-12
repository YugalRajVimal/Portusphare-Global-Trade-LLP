import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      {/* Leaf Decoration (Right) */}
      {/* <img
        src="/leaf-right.png"
        alt="leaf"
        className="absolute right-0 top-0 w-56 opacity-30 pointer-events-none hidden md:block"
      /> */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 relative">
        {/* LEFT IMAGE SECTION */}
        <div className="relative flex flex-col justify-center">
          {/* Organic Masked BG Image */}
          <div
            className={`
              transition-all duration-700 mb-24
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <img
              src="/Banner/Banner1.png"
              className="w-full h-[420px] md:h-[480px] object-cover rounded-[120px_0_120px_0] shadow-lg"
              alt="About Portusphere Global Trade LLP"
            />
          </div>

          {/* Circular Foreground Image */}
          <div
            className={`
              absolute -bottom-10 left-8 md:left-20 mb-24
              transition-all duration-700 delay-200
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <img
              src="/Farmer.png"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white"
              alt="Indian agriculture and farmer support"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 md:left-10 bg-white shadow-xl rounded-xl px-6 py-4 flex items-center gap-4">
              <div className="bg-lime-500 p-4 rounded-lg text-white text-2xl">🌱</div>
              <div>
                <p className="font-bold text-gray-700">Empowering</p>
                <p className="font-bold text-gray-700">Indian Farmers</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div
          className={`
            flex flex-col justify-center mt-8 md:mt-0
            transition-all duration-700 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* Section Title */}
          <p className="text-lime-600 font-semibold text-lg flex items-center gap-2">
            Who We Are <span className="w-10 h-1 bg-lime-500 inline-block rounded"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mt-3">
            Dynamic Agri-Products Exporters<br className="hidden sm:inline" /> From India
          </h2>

          {/* Main Content Intro */}
          <p className="text-gray-700 mt-6 text-lg">
            Portusphere Global Trade LLP is a dynamic trading and export company dedicated to providing high-quality agricultural products sourced directly from farmers. We operate in both domestic and export markets, focusing on quality, sustainability, and trust.
          </p>

          {/* Vision */}
          <div className="mt-7">
            <h3 className="text-green-900 font-bold text-xl mb-1">Our Vision</h3>
            <p className="text-gray-700 text-base">
              To become a global leader in supplying clean, fresh, and authentic Indian agri-products while uplifting the farming community.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-7">
            <h3 className="text-green-900 font-bold text-xl mb-1">Our Mission</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>To deliver premium agricultural products with strict quality control</li>
              <li>To create sustainable income opportunities for farmers</li>
              <li>To build long-term business relationships world over</li>
              <li>To promote India’s agricultural excellence globally</li>
            </ul>
          </div>

          {/* Tagline */}
          <div className="mt-7">
            <h3 className="text-green-900 font-bold text-xl mb-1">Our Tagline</h3>
            <blockquote className="border-l-4 border-lime-500 pl-4 italic text-lime-700 text-lg">“From Our Land to the World”</blockquote>
          </div>

          {/* CTA + Company Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-10">
            <a
              href="#contact"
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-4 rounded-md shadow transition"
            >
              Contact Us &rarr;
            </a>
            <div className="flex flex-col">
              <p className="text-green-900 font-bold text-lg">Portusphere Global Trade LLP</p>
              <p className="text-gray-700 text-sm">B6/907, Supertech Eco Village -2, Greater Noida West</p>
              <a
                href="tel:+919560365050"
                className="text-lime-600 font-semibold text-sm mt-1 hover:underline"
              >+91 95603 65050</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
