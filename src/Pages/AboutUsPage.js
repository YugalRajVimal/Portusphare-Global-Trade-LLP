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
      <section className="relative w-full mt-16 xs:mt-28 sm:mt-28 pt-10 overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">
        <div className="flex items-center gap-3 mb-10 justify-center text-center w-full">
          <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
          <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">
            About Us
          </span>
          <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 z-10 relative items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex flex-col items-center justify-center h-full">
            {/* Composite: Agriculture & Textile Image presentation */}
            <div
              className={`
                transition-all duration-700 mb-24
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              <div className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl border-4 border-[#e6efcb] bg-white/20 overflow-hidden transform hover:scale-105 duration-300 relative">
                {/* Agriculture Image */}
                <img
                  src="/textile.jpg"
                  className="w-full   object-cover"
                  alt="About Portusphere Global Trade LLP - Agriculture"
                />
                {/* Textile Image: overlaid lower, so both are visible
                <img
                  src="/Banner/textile_placeholder.jpg"
                  className="w-full h-[165px] md:h-[200px] object-cover border-t-2 border-lime-100"
                  alt="About Portusphere Global Trade LLP - Textiles"
                /> */}
                {/* Label overlays */}
                {/* <span className="absolute left-3 top-3 bg-lime-600 text-white rounded-full px-4 py-1 text-xs font-semibold shadow">
                  Agriculture
                </span>
                <span className="absolute right-3 bottom-3 bg-rose-500 text-white rounded-full px-4 py-1 text-xs font-semibold shadow">
                  Textiles
                </span> */}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION - now covers both divisions */}
          <div
            className={`
              flex flex-col justify-center mt-8 md:mt-0
              transition-all duration-700 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              relative z-10
            `}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow-md">
              Enriching Global Markets<br className="hidden sm:inline" /> with Indian Agriculture & Textiles
            </h2>

            {/* Main Content — covers both agri & textile */}
            <p className="text-gray-700/90 mt-6 text-lg max-w-2xl">
              <span className="font-bold text-lime-700">
                Portusphere Global Trade LLP
              </span>{" "}
              is a dynamic export and trading company devoted to bringing the diverse bounty of Indian <span className="font-bold text-green-900">agricultural products</span> and <span className="font-bold text-rose-700">textile heritage</span> to markets worldwide. We build direct relationships with passionate farmers and skilled textile artisans alike, ensure strict quality standards, and always focus on responsible, transparent trade that uplifts local communities and satisfies global customers.
            </p>

            {/* Highlights - with agri & textile */}
            <ul className="grid gap-3 mt-6 md:mt-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Direct farmer & artisan sourcing with fair pricing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Export expertise in <span className="font-bold">agriculture & textile</span> sectors 
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Commitment to authentic, clean & fresh agri-products and premium-quality textiles
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-lime-500 mt-1" />
                <span className="text-green-900 font-semibold">
                  Transparent, trusted supply chain &amp; timely global delivery
                </span>
              </li>
            </ul>

            {/* Core Divisions Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {/* Agriculture Division */}
              <div className="bg-lime-50/80 rounded-xl shadow-sm p-6 border-l-4 border-lime-400">
                <div className="font-bold text-green-900 text-lg mb-2">Agriculture Division</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Indian Spices</li>
                  <li>Fresh Vegetables</li>
                  <li>Grains &amp; Pulses</li>
                  <li>Dry Fruits</li>
                </ul>
              </div>
              {/* Textile Division */}
              <div className="bg-rose-50/80 rounded-xl shadow-sm p-6 border-l-4 border-rose-400">
                <div className="font-bold text-rose-700 text-lg mb-2">Textile Division</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Cotton &amp; Blended Fabrics</li>
                  <li>Traditional Indian Textiles</li>
                  <li>Home Textile Materials</li>
                  <li>Garment-ready Products (Sarees, Kurtis, etc.)</li>
                </ul>
              </div>
            </div>

            {/* Tagline & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <div className="flex-1">
                <h4 className="text-green-900 font-extrabold text-xl mb-2">Our Tagline</h4>
                <blockquote className="border-l-4 border-lime-500 pl-5 italic text-lime-700 bg-lime-50 py-2 px-2 rounded-r-lg shadow">
                  “From Our Land to the World.”
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
        </div>
      </section>

      {/* Vision & Mission below main section, updated for both divisions */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-7">
        <div className="bg-lime-50/70 rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col mb-8 sm:mb-0">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Vision</h3>
          <p className="text-gray-700 text-base">
            To emerge as a global leader in supplying pure, fresh, and authentic Indian agricultural <span className="font-semibold text-rose-700">and</span> textile products, while uplifting both farmer and artisan livelihoods across India.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-lime-400 flex flex-col">
          <h3 className="text-lime-600 font-bold text-lg mb-2">Our Mission</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
            <li>Delivering premium-quality agricultural and textile products to global markets</li>
            <li>Creating sustainable opportunities for Indian farmers and textile producers</li>
            <li>Promoting India’s strengths in agriculture <span className="font-semibold text-rose-700">&amp;</span> textiles on the world stage</li>
            <li>Nurturing long-term trust and collaboration with our partners and buyers</li>
          </ul>
        </div>
      </section>
    </>
  );
}
