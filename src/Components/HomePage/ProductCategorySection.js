import { useEffect, useState } from "react";
import {
  FaAppleAlt,
  FaCarrot,
  FaSeedling,
  FaLeaf
} from "react-icons/fa";

// Corrected image URLs (pointing to public/product-images instead of /products)
const productCategories = [
  {
    icon: <FaAppleAlt className="text-4xl text-lime-600" />,
    title: "Fresh Fruits",
    desc: "Handpicked from certified orchards with natural sweetness and export-grade quality.",
    highlights: [
      "Mango",
      "Banana",
      "Pomegranate",
      "Grapes",
      "Papaya",
      "Watermelon",
      "Seasonal fruits",
    ],
    badge: "Fresh • Natural • Hygienic",
    img: "/Products/fruits.jpg",
  },
  {
    icon: <FaCarrot className="text-4xl text-lime-600" />,
    title: "Fresh Vegetables",
    desc: "Harvested daily, graded, and delivered with maximum freshness.",
    highlights: [
      "Onions",
      "Potatoes",
      "Tomatoes",
      "Lemon",
      "Green Chilies",
      "Drumstick",
      "Ladyfinger",
      "Brinjal",
      "Cabbage / Cauliflower",
      "Seasonal & leafy vegetables",
    ],
    badge: "Farm Fresh • Quality Assured",
    img: "/Products/vegies.webp",
  },
  {
    icon: <FaSeedling className="text-4xl text-lime-600" />,
    title: "Indian Spices",
    desc: "Authentic flavors sourced directly from spice-growing regions.",
    highlights: [
      "Turmeric (whole & powder)",
      "Red Chilli (whole & powder)",
      "Cumin",
      "Coriander",
      "Black Pepper",
      "Cardamom",
      "Cloves",
      "Fenugreek",
      "Spice blends",
    ],
    badge: "Pure • Aromatic • Chemical-free options available",
    img: "/Products/spices.jpg",
  },
  {
    icon: <FaLeaf className="text-4xl text-lime-600" />,
    title: "Grains & Pulses",
    desc: "Clean, sorted, and supplied as per domestic and export specifications.",
    highlights: [
      "Rice (Basmati / Non-Basmati)",
      "Wheat",
      "Maize",
      "Millet (Bajra / Jowar / Ragi)",
      "Toor Dal",
      "Chana Dal",
      "Moong Dal",
      "Urad Dal",
    ],
    badge: "Nutrient-rich • Carefully Processed",
    img: "/Products/pulces.jpeg",
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
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {productCategories.map((cat, i) => (
          <div
            key={cat.title}
            className={`
              bg-white rounded-2xl shadow-xl p-8 pt-12 relative flex flex-col group overflow-hidden
              transition-all duration-700
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
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
            <div className="flex-1"></div>
            <div className="mt-4 text-xs text-lime-800 font-semibold text-center tracking-wide">{cat.badge}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
