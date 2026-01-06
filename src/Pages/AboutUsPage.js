import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUsPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <>
      {/* Section Title */}
      <section className="relative w-full mt-16 xs:mt-28 mb-10 sm:mt-28 pt-10 overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">
        <div className="flex items-center gap-3 mb-10 justify-center text-center w-full">
          <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
          <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">
            About Us
          </span>
          <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 z-10 relative items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex flex-col items-center gap-10 justify-center h-full">
            {/* Textile Image Presentation */}
            <div
              className={`
                transition-all duration-700 
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <div className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl border-4 border-[#e6efcb] bg-white/20 overflow-hidden transform hover:scale-105 duration-300 relative">
                <img
                  src="/textile.jpg"
                  className="w-full object-cover"
                  alt="About Portusphere Global Trade LLP - Textiles"
                />
                {/* 
                  You can place additional overlays or textile visuals here in the future 
                */}
              </div>
            </div>
               {/* Tagline & CTA */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <div className="flex-1">
                <h4 className="text-green-900 font-extrabold text-xl mb-2">Our Tagline</h4>
                <blockquote className="border-l-4 border-lime-500 pl-5 italic text-lime-700 bg-lime-50 py-2 px-2 rounded-r-lg shadow">
                  “Weaving Indian Stories for the World.”
                </blockquote>
              </div>
              <div className="flex flex-col gap-3 sm:gap-1">
                <a
                  href="/contact-us"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 text-lg"
                >
                  Contact Us &rarr;
                </a>
                <div className="flex flex-col mt-2">
                  <p className="text-green-900 font-bold text-base sm:text-lg">Portusphere Global Trade LLP</p>
                  <p className="text-gray-600 text-sm">
                    B6/908, Supertech Eco Village -2,
                    <br />
                    Greater Noida West
                  </p>
                  <a
                    href="tel:+919560365050"
                    className="text-lime-700 font-semibold text-sm leading-tight mt-1 hover:underline"
                  >
                    +91 95603 65050
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION - Textile Focused */}
          <div
            className={`
              flex flex-col justify-center mt-8 md:mt-0
              transition-all duration-700 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              relative z-10
            `}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow-md">
              Celebrating India's Textile Legacy<br className="hidden sm:inline" /> for the World
            </h2>

            {/* Main Content — Textile-Only */}
            <p className="text-gray-700/90 mt-6 text-lg max-w-2xl">
              <span className="font-bold text-lime-700">
                Portusphere Global Trade LLP
              </span>{" "}
              is a trusted export house dedicated to showcasing India's rich textile diversity to global buyers. We work directly with skilled artisans, master weavers, and established textile units, ensuring every product meets our uncompromising standards for quality, authenticity, and sustainability. Our mission: to make Indian sarees, kurtis, fabrics, home textiles, and contemporary garments accessible to the world, all while uplifting traditional craftsmanship and supporting value-driven sourcing.
            </p>

            {/* Textile Highlights */}
            <ul className="grid gap-3 mt-6 md:mt-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Direct partnerships with artisan clusters & renowned textile mills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Expertise in <span className="font-bold">sarees, blouses, lady suits, kurtis, shawls, fabrics, and home textiles</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Focus on premium quality, innovative designs & ethical trade practices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Reliable export processes, global packaging & prompt delivery
                </span>
              </li>
            </ul>

            {/* Textile Product Segments */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-lime-50/80 rounded-xl shadow-sm p-6 border-l-4 border-lime-400">
                <div className="font-bold text-green-900 text-lg mb-2">Apparel Range</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Sarees (Kanjeevaram, Banarasi, Handloom, Designer, Regional)</li>
                  <li>Blouses (Ready-to-wear & Designer)</li>
                  <li>Lady Suits & Dress Materials</li>
                  <li>Kurtis (Ethnic, Fusion, Contemporary)</li>
                </ul>
              </div>

              <div className="bg-rose-50/80 rounded-xl shadow-sm p-6 border-l-4 border-rose-400">
                <div className="font-bold text-rose-700 text-lg mb-2">Fabrics & Home Textiles</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Cotton, Silk, Linen, and Blended Fabrics</li>
                  <li>Shawls, Stoles & Dupattas</li>
                  <li>Home Textiles (Bed Linen, Curtains, Table Linen)</li>
                  <li>Custom Bulk Textile Orders</li>
                </ul>
              </div>
            </div> */}

         
          </div>
        </div>
      </section>

      {/* Vision & Mission below main section, updated for Textiles */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-7">
        <div className="bg-lime-50/70 rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col mb-8 sm:mb-0">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Vision</h3>
          <p className="text-gray-700 text-base">
            To be a global frontrunner in supplying authentic, innovative, and sustainable Indian textile products, while empowering artisans and upholding India's textile traditions in every thread.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Mission</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
            <li>Bringing the best of Indian textiles—fabrics, garments, and home decor—to international clients</li>
            <li>Promoting ethical sourcing, quality control, and transparent processes across the textile supply chain</li>
            <li>Creating sustainable opportunities for Indian weavers, craftspeople, and textile businesses</li>
            <li>Celebrating India's textile legacy and modern design prowess on the global stage</li>
            <li>Building lasting relationships with partners through trust, reliability, and service excellence</li>
          </ul>
        </div>
      </section>
    </>
  );
}
