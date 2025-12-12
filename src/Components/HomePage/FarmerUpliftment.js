import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Fair and assured pricing",
  "Training in modern farming techniques",
  "Support in seeds, fertilizers, and crop consultation",
  "Direct procurement at farm gate to reduce middlemen",
  "Guidance for organic and chemical-free farming",
  "Access to global markets for better earning potential",
];

export default function FarmerUpliftment() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="grid lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div
          className={`
            h-[400px] lg:h-full w-full overflow-hidden transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <img
            src="/Farmer.png"
            alt="Portusphere Farmer Upliftment Program"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`
            bg-[#f7fcf7] px-8 lg:px-14 py-14 transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-lime-600 font-semibold text-lg flex items-center gap-3">
            3.&nbsp;Our Farmer Upliftment Program
            <span className="w-14 h-[2px] bg-lime-600"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mt-3">
            Empowering Farmers for a Better Tomorrow
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Farmers are the backbone of Portusphere Global Trade LLP. Through our Farmer Upliftment Program, we support agricultural families with:
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-green-900 font-semibold mt-8 text-lg">
            By partnering with us, farmers gain stability, improved productivity, and increased profits.
          </p>
        </div>
      </div>
    </section>
  );
}
