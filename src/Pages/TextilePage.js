import React, { useEffect, useRef, useState } from "react";

const images = [
  { src: "/Products/dryfruits.jpg", alt: "Dry Fruits" },
  { src: "/Products/fruits.jpg", alt: "Fruits" },
  { src: "/Products/pulces.jpeg", alt: "Pulses" },
  { src: "/Products/spices.jpg", alt: "Spices" },
  { src: "/Products/vegies.webp", alt: "Vegetables" }
];

export default function AgriculturePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  return (
    <section className="relative w-full mt-16 xs:mt-28 sm:mt-28 overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">

      {/* ================= HERO BANNER CAROUSEL (FULL WIDTH) ================= */}
      <div className="w-full px-4 py-10">
        <div className="relative w-full max-h-[320px] h-[200px] sm:h-[320px] rounded-2xl shadow-xl overflow-hidden">
          {images.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`
                absolute left-0 top-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700
                ${activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
              style={{
                transitionProperty: "opacity"
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= TITLE ================= */}
      <div className="flex items-center gap-4 mb-10 justify-center text-center">
        <span className="w-12 h-1.5 bg-lime-500 rounded-full" />
        <h1 className="text-lime-900 font-extrabold tracking-wide uppercase text-3xl sm:text-5xl">
          Agriculture & Food Products
        </h1>
        <span className="w-12 h-1.5 bg-lime-500 rounded-full" />
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-700">
            Portusphere Global Trade LLP
          </h2>
          <p className="text-lg text-green-800 font-medium mt-2">
            Cultivating Quality, Delivering Freshness
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
            At Portusphere Global Trade LLP, our Agriculture & Food Products division brings the bounty of Indian farms to global markets. We source, process, and supply premium-quality fresh vegetables, fruits, spices, grains, and pulses—ensuring freshness, traceability, and ethical sourcing.
          </p>
        </div>

        {/* ================= AGRICULTURE RANGE ================= */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-lime-800 mb-10 text-center">
            Our Agricultural Range
          </h3>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fresh Vegetables",
                icon: "🥒",
                bg: "bg-lime-50",
                items: ["Onion", "Potato", "Green Chilli", "Lemon", "Drumstick"],
              },
              {
                title: "Fresh Fruits",
                icon: "🍋",
                bg: "bg-emerald-50",
                items: ["Mango", "Pomegranate", "Banana"],
              },
              {
                title: "Indian Spices",
                icon: "🌶️",
                bg: "bg-orange-50",
                items: ["Turmeric", "Chilli", "Cumin", "Coriander"],
              },
              {
                title: "Grains & Pulses",
                icon: "🌾",
                bg: "bg-lime-100",
                items: ["Rice", "Wheat", "Dal (Pulses)"],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} rounded-2xl shadow-md p-6 hover:shadow-xl transition`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <h4 className="font-bold text-lime-900 text-xl">
                    {item.title}
                  </h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= QUALITY ================= */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-lime-800 mb-6 text-center">
            Quality & Sourcing
          </h3>

          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-center">
            We work directly with trusted farmers, FPOs, and suppliers to ensure:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Farm-fresh quality",
              "Hygienic processing",
              "Ethical sourcing",
              "Competitive pricing",
            ].map((point) => (
              <div
                key={point}
                className="bg-white rounded-xl shadow p-6 text-center text-green-900 font-medium"
              >
                ✔ {point}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
