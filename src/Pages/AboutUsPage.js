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
     
      <section className="relative w-full  mt-16   xs:mt-28 sm:mt-28 pt-10  overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">
       
      <div className="flex items-center gap-3 mb-10 justify-center text-center w-full">
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
        <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">About Us</span>
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
      </div>
    
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 z-10 relative items-center">
          {/* LEFT IMAGE SECTION WITH NEW DESIGN */}
          <div className="relative flex flex-col items-center justify-center h-full">
            {/* Background Masked Agriculture Image */}
            <div
              className={`
                transition-all duration-700 mb-24
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <div className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl border-4 border-[#e6efcb] bg-white/20 overflow-hidden transform hover:scale-105 duration-300">
                <img
                  src="/Banner/Banner1.png"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  alt="About Portusphere Global Trade LLP"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION - improved design and content blocks */}
          <div
            className={`
              flex flex-col justify-center mt-8 md:mt-0
              transition-all duration-700 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              relative z-10
            `}
          >
         
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow-md">
              Transforming Indian Agriculture<br className="hidden sm:inline" /> for Global Excellence
            </h2>

            {/* Main Content, refined with highlight */}
            <p className="text-gray-700/90 mt-6 text-lg max-w-2xl">
              <span className="font-bold text-lime-700">
                Portusphere Global Trade LLP
              </span>{" "}
              is an ambitious export and trading company with a mission to bring the bounty of Indian agriculture to markets worldwide. We source directly from passionate farmers, ensure strict quality standards, and believe in sustainable, ethical trade that benefits local grower communities and global consumers alike.
            </p>

            {/* Highlights Points */}
            <ul className="grid gap-3 mt-6 md:mt-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Direct sourcing &amp; fair pricing for farmers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Domestic & global market expertise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Commitment to authentic, clean, and fresh agri-products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Transparent, trusted supply chain &amp; timely delivery
                </span>
              </li>
            </ul>

            {/* Tagline & CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <div className="flex-1">
                <h4 className="text-green-900 font-extrabold text-xl mb-2">Our Tagline</h4>
                <blockquote className="border-l-4 border-lime-500 pl-5 italic text-lime-700 bg-lime-50 py-2 px-2 rounded-r-lg shadow">
                  “From Our Land to the World.”
                </blockquote>
              </div>
              <div className="flex flex-col gap-3 sm:gap-1">
                <a
                  href="#contact"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 text-lg"
                >
                  Contact Us &rarr;
                </a>
                <div className="flex flex-col mt-2">
                  <p className="text-green-900 font-bold text-base sm:text-lg">Portusphere Global Trade LLP</p>
                  <p className="text-gray-600 text-sm">B6/907, Supertech Eco Village -2,<br />Greater Noida West</p>
                  <a
                    href="tel:+919560365050"
                    className="text-lime-700 font-semibold text-sm leading-tight mt-1 hover:underline"
                  >+91 95603 65050</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission moved below the main section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-7">
        <div className="bg-lime-50/70 rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col mb-8 sm:mb-0">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Vision</h3>
          <p className="text-gray-700 text-base">
            To emerge as a global leader in supplying pure, fresh, and authentic Indian agri-products while uplifting farmer livelihoods.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Mission</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
            <li>Delivering premium-quality agricultural products worldwide</li>
            <li>Creating sustainable opportunities for Indian farmers</li>
            <li>Promoting India's agricultural strengths on a global stage</li>
            <li>Nurturing long-term trust with partners and buyers</li>
          </ul>
        </div>
      </section>
    </>
  );
}
