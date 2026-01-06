import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const textilePoints = [
  "Fair compensation for skilled artisans and weavers",
  "Training in contemporary and traditional textile techniques",
  "Support in sourcing quality raw materials and advanced machinery",
  "Direct procurement from producer clusters to eliminate exploitative intermediaries",
  "Guidance for sustainable and eco-friendly textile production",
  "Exposure to global markets for enhanced recognition and income",
];

export default function TextileEmpowerment() {
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
            src="/textile3.jpg"
            alt="Empowering Indian Textile Artisans"
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
          <p className="text-lime-600 font-semibold text-lg flex items-center gap-3 font-serif">
            3.&nbsp;Empowering Textile Artisans
            <span className="w-14 h-[2px] bg-lime-600"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mt-3 font-serif">
            Uplifting India's Textile Community
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Indian textile artisans and workers form the core of Portusphere Global Trade LLP. Our initiatives uplift textile communities through:
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4">
            {textilePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-green-900 font-semibold mt-8 text-lg font-serif">
            By connecting artisans with new technologies and global markets, we enable sustainable growth, skill development, and greater prosperity.
          </p>
        </div>
      </div>
    </section>
  );
}
