import { useEffect, useState } from "react";
import { FaCarrot, FaSeedling, FaLeaf, FaRegLemon } from "react-icons/fa";

// Add a "path" property for each category for linking
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
    path: "/products/indian-spices",
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
    path: "/products/fresh-vegetables",
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
      "Pulses",
    ],
    extra: "Packed with nutrition, purity, and consistency.",
    img: "/Products/pulces.jpeg",
    path: "/products/grains-pulses",
  },
  {
    icon: <FaRegLemon className="text-4xl text-lime-600" />,
    title: "Dry Fruits",
    desc: "Finest quality dry fruits, handpicked for freshness and taste.",
    highlights: [
      "Cashew Nuts",
      "Almonds",
      "Pistachios",
      "Raisins",
      "Walnuts",
      "Dried Figs",
      "Dates",
      "Apricots",
      "Anjeer",
      "Mixed Dry Fruit Packs",
    ],
    extra: "Hygienically packed to preserve natural nutrition and flavor.",
    img: "/Products/dryfruits.jpg",
    path: "/products/dry-fruits",
  },
];

export default function ProductsPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <main className="relative w-full  mt-16  xs:mt-28 sm:mt-28 pt-10  overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">

      <div className="flex items-center gap-3 mb-10 justify-center text-center w-full">
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
        <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">Our Products</span>
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
      </div>
      <p className="max-w-2xl mx-auto text-center text-gray-600 mt-4 text-lg px-4">
        We supply premium agricultural products trusted by retailers,
        wholesalers, and global buyers.
      </p>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-28 pt-10">
        <div className="flex flex-col gap-24">
          {productCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`
                bg-white rounded-3xl shadow-2xl p-10 lg:p-16 relative overflow-hidden
                transition-all duration-700
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${200 + i * 130}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">

                {/* IMAGE BLOCK */}
                <div className="flex  justify-center lg:justify-start relative">
                  <a href={cat.path} className="block focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-2xl">
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl shadow-xl bg-lime-50 overflow-hidden relative">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </a>

                  {/* Soft floating icon */}
                  <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 opacity-20 text-lime-600 text-8xl lg:text-9xl pointer-events-none">
                    {cat.icon}
                  </div>
                </div>

                {/* CONTENT BLOCK */}
                <div className="text-left">
                  <h3 className="text-green-900 font-extrabold text-3xl lg:text-4xl mb-3">
                    <a href={cat.path} className="hover:text-lime-700 transition-colors">{cat.title}</a>
                  </h3>

                  <p className="text-gray-600 text-lg mb-6">{cat.desc}</p>

                  {/* Highlights */}
                  <ul className="text-green-800 text-lg space-y-2 list-disc list-inside lg:pl-3">
                    {cat.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {/* Extra line */}
                  {cat.extra && (
                    <p className="text-gray-700 text-sm mt-6 border-l-4 border-lime-500 pl-4">
                      {cat.extra}
                    </p>
                  )}

                  {/* Category page link button */}
                  <div className="mt-8">
                    <a
                      href={cat.path}
                      className="inline-block rounded-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 text-base shadow transition"
                    >
                      View {cat.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
