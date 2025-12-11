import { useEffect, useState } from "react";
import {
  FaRegStar,
  FaRegClock,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="relative w-full py-24 bg-green-50 overflow-hidden">

      {/* Decorative BG (optional bamboo pattern) */}
      <img
        src="/leaf-bg-right.png"
        alt=""
        className="absolute right-0 top-0 opacity-[0.15] w-[350px] pointer-events-none hidden md:block"
      />
      <img
        src="/leaf-bg-left.png"
        alt=""
        className="absolute left-0 bottom-0 opacity-[0.15] w-[300px] pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`
            text-center transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-lime-600 font-semibold text-lg flex items-center gap-3 justify-center">
            <span className="w-10 h-[2px] bg-lime-500"></span>
            WHY CHOOSE US
            <span className="w-10 h-[2px] bg-lime-500"></span>
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mt-3">
          We deliver quality you can trust, service you can rely on.
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="mt-16 flex gap-10 items-center">

          {/* LEFT COLUMN - Big Blocks */}
          <div
            className={`
              flex-1 w-2/3 grid grid-cols-2 gap-6 transition-all duration-700 delay-150
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div className="bg-white shadow-xl rounded-xl p-8 text-center text-green-900 font-semibold text-xl">
              Direct sourcing from farmers
            </div>

            <div className="bg-lime-100 shadow-xl rounded-xl p-8 text-center text-lime-700 font-semibold text-xl">
              PAN India & global supply capability
            </div>

            <div className="bg-lime-100 shadow-xl rounded-xl p-8 text-center text-lime-700 font-semibold text-xl">
              Consistent quality and hygiene standards
            </div>
            
            <div className="bg-white shadow-xl rounded-xl p-8 text-center text-green-900 font-semibold text-xl">
              Timely delivery with strong logistics
            </div>

            <div className="bg-white shadow-xl rounded-xl p-8 text-center text-green-900 font-semibold text-xl">
              Sustainable and ethical farming support
            </div>

            <div className="bg-lime-100 shadow-xl rounded-xl p-8 text-center text-lime-700 font-semibold text-xl">
              Competitive pricing for bulk orders
            </div>
          </div>
          <div className="relative flex-2 w-1/3 flex ">
 

          {/* LEFT COLUMN - Image */}
          <div className={`
               w-full
              transition-all duration-700 delay-500
              ${animate ? "opacity-100 " : "opacity-0"}
            `}
          >
            <img
              src="/WhyChooseUs.png"
              alt="Why Choose Us"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
          </div>

        

        </div>
      </div>
    </section>
  );
}

/* -----------------------------------
   Feature Card Component
----------------------------------- */
function FeatureCard({ icon, title }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center">
      {icon}
      <p className="mt-4 font-semibold text-green-900">{title}</p>
    </div>
  );
}
