import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function DomesticGlobalMarkets() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="pt-10 pb-24 bg-gradient-to-b from-white to-[#f7fff4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div
          className={`
            text-center transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-lime-600 font-semibold text-lg flex items-center justify-center gap-3">
            <span className="w-10 h-[2px] bg-lime-500"></span>
            Domestic & Global Markets
            <span className="w-10 h-[2px] bg-lime-500"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
            Supplying Quality Locally & Worldwide
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 mt-16">

          {/* LEFT CARD — DOMESTIC MARKET */}
          <div
            className={`
              bg-white rounded-2xl shadow-xl p-10 border border-lime-100
              transition-all duration-700 delay-150
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <h3 className="text-2xl font-extrabold text-green-900 mb-4">
              Domestic Market
            </h3>

            <p className="text-gray-600 mb-6">
              We supply high-quality products to:
            </p>

            <ul className="space-y-4">
              {[
                "Wholesalers",
                "Retailers",
                "Food processing companies",
                "Hotels and restaurants",
                "Institutional buyers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD — INTERNATIONAL MARKET */}
          <div
            className={`
              bg-white rounded-2xl shadow-xl p-10 border border-lime-100
              transition-all duration-700 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <h3 className="text-2xl font-extrabold text-green-900 mb-4">
              International Export Market
            </h3>

            <p className="text-gray-600 mb-6">
              Our global network spans:
            </p>

            <ul className="space-y-4">
              {[
                "Middle East",
                "Africa",
                "Europe",
                "Southeast Asia",
                "USA & Canada",
                "Australia",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

         
          </div>
        </div>
           {/* Compliance Box */}
           <div className="mt-8 p-5 bg-lime-50 text-center rounded-xl border border-lime-200">
              <p className="text-gray-700 leading-relaxed">
                We follow strict export compliance, phytosanitary standards,  
                and international packaging norms.
              </p>
            </div>
      </div>
    </section>
  );
}
