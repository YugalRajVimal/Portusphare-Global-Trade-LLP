import { useEffect, useState } from "react";
import {
  FaCarrot,
  FaSeedling,
  FaLeaf
} from "react-icons/fa";

// Update: Hide Fresh Fruits, update the rest per new copy
const productCategories = [
  {
    icon: <FaSeedling className="text-4xl text-lime-600" />,
    title: "Indian Spices",
    desc: "Authentic, aromatic, and rich in flavor.",
    highlights: [
      "Turmeric",
      "Red Chilli",
      "Cumin",
      "Coriander",
      "Garam Masala Blends",
      "Cardamom",
      "Black Pepper",
      "Mustard Seeds",
      "Fennel Seeds",
      "Fenugreek",
      "And many more…",
    ],
    extra: "We ensure clean processing, hygienic packaging, and export-grade standards.",
    img: "/Products/spices.jpg",
    badge: undefined,
  },
  {
    icon: <FaCarrot className="text-4xl text-lime-600" />,
    title: "Fresh Vegetables",
    desc: "Sourced directly from farms, harvested at perfect maturity.",
    highlights: [
      "Onions",
      "Potatoes",
      "Tomatoes",
      "Green Chillies",
      "Okra",
      "Drumstick",
      "Lemon",
      "Cabbage",
      "Cauliflower",
      "Seasonal Vegetables",
    ],
    extra: "We maintain freshness through cold-chain logistics.",
    img: "/Products/vegies.webp",
    badge: undefined,
  },
  {
    icon: <FaLeaf className="text-4xl text-lime-600" />,
    title: "Grains & Pulses",
    desc: "Premium-quality Indian staples for bulk and retail buyers.",
    highlights: [
      "Basmati Rice",
      "Non-Basmati Rice",
      "Wheat",
      "Maize",
      "Millet",
      "Toor Dal",
      "Moong Dal",
      "Chana Dal",
      "Urad Dal",
    ],
    extra: "Packed with nutrition, purity, and consistency.",
    img: "/Products/pulces.jpeg",
    badge: undefined,
  },
];

export default function ProductCategorySection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#f9fff2] overflow-hidden">

      {/* Heading */}
      <div
        className={`
          text-center transition-all duration-700
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <p className="text-lime-600 font-semibold text-lg flex items-center justify-center gap-3">
          <span className="w-10 h-[2px] bg-lime-500"></span>
          <span role="img" aria-label="apple">🍎</span> OUR PRODUCTS
          <span className="w-10 h-[2px] bg-lime-500"></span>
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
          Product Categories
        </h2>
      </div>

      {/* PRODUCT CARDS */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productCategories.map((cat, i) => (
          <div
            key={cat.title}
            className={`
              bg-white rounded-2xl shadow-xl p-8 pt-12 relative flex flex-col justify-between group overflow-hidden
              transition-all duration-700
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
            <div>
 {/* IMAGE (decorative, optional, fallback to icon) */}
 <div className="relative mb-8 w-full flex justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-lime-50 flex items-center justify-center shadow-lg overflow-hidden">
                {cat.img
                  ? <img src={cat.img} alt={cat.title} className="object-cover w-20 h-20" />
                  : cat.icon}
              </div>
              {/* Optionally overlay icon above image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="opacity-80">{cat.icon}</span>
              </div>
            </div>
            <h3 className="text-green-900 font-extrabold text-xl text-center mb-2">{cat.title}</h3>
            <p className="text-gray-600 text-center mb-4">{cat.desc}</p>
            <ul className="text-green-700 text-sm mb-4 space-y-1 list-disc list-inside">
              {cat.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            </div>
            <div>
            {cat.extra && (
              <div className="text-gray-700 text-xs text-center mb-2">{cat.extra}</div>
            )}
            <div className="flex-1"></div>
            {cat.badge && (
              <div className="mt-4 text-xs text-lime-800 font-semibold text-center tracking-wide">{cat.badge}</div>
            )}
            </div>
           
         
          </div>
        ))}
      </div>
    </section>
  );
}
