import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

// Domestic textile buyers (India)
const domesticTextileClients = [
  "Textile Wholesalers & Distributors",
  "Retail Fashion Boutiques",
  "Garment Manufacturers",
  "Corporate and Institutional Uniform Suppliers",
  "Hotels & Hospitality (Linen, Decor Textiles)",
  "Home Furnishing Showrooms",
];

// Global textile markets (exports)
const internationalTextileMarkets = [
  "Europe (UK, Germany, France, Italy, Spain)",
  "North America (USA & Canada)",
  "Australia & New Zealand",
  "Middle East (UAE, Saudi Arabia, Qatar)",
  "Africa (South Africa, Nigeria, Egypt, Kenya)",
  "East Asia & Southeast Asia",
];

// Main textile product range (examples)
const textileProductRange = [
  "Premium Sarees & Dress Materials",
  "Designer Kurtis & Ethnic Garments",
  "Cotton, Silk & Blended Fabrics",
  "Home Textiles: Bed Linen, Curtains, Table Linen",
  "Blouses, Shawls & Stoles",
  "Institutional Uniform Fabrics",
  "Customized Textile Solutions",
];

export default function DomesticGlobalTextileMarkets() {
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
            Domestic & Global Textile Presence
            <span className="w-10 h-[2px] bg-lime-500"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
            Delivering Indian Textiles Across India & The World
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 mt-16">

          {/* LEFT CARD — DOMESTIC TEXTILE MARKET */}
          <div
            className={`
              bg-white rounded-2xl shadow-xl flex flex-col justify-between p-10 border border-lime-100
              transition-all duration-700 delay-150
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div>
              <h3 className="text-2xl font-extrabold text-green-900 mb-4">
                Indian Domestic Textile Clients
              </h3>

              <p className="text-gray-600 mb-3">
                Proudly supplying textiles to a wide range of partners across India:
              </p>

              <ul className="space-y-2 mb-6">
                {domesticTextileClients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Products Served section */}
            <div className="mt-4">
              <div className="font-semibold text-lime-800 text-md mb-1">
                Products Offered:
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-2">
                {textileProductRange.map((prod, idx) => (
                  <li key={idx}>{prod}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CARD — INTERNATIONAL TEXTILE MARKET */}
          <div
            className={`
              bg-white rounded-2xl flex flex-col justify-between shadow-xl p-10 border border-lime-100
              transition-all duration-700 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div>
              <h3 className="text-2xl font-extrabold text-green-900 mb-4">
                Global Textile Export Destinations
              </h3>

              <p className="text-gray-600 mb-3">
                Our Indian textile products are trusted by clients in:
              </p>

              <ul className="space-y-2 mb-6">
                {internationalTextileMarkets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Export Range Section */}
            <div className="mt-4">
              <div className="font-semibold text-lime-800 text-md mb-1">
                Textile Export Portfolio:
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-2">
                {textileProductRange.map((prod, idx) => (
                  <li key={idx}>{prod}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Compliance Box */}
        <div className="mt-8 p-5 bg-lime-50 text-center rounded-xl border border-lime-200">
          <p className="text-gray-700 leading-relaxed">
            We uphold international quality, ethical sourcing, and robust compliance in every stage—ensuring our textiles meet the highest export and domestic industry standards, including packaging and labeling norms.
          </p>
        </div>
      </div>
    </section>
  );
}
