import { useEffect, useState } from "react";
import { FaCarrot, FaSeedling, FaLeaf, FaRegLemon } from "react-icons/fa";

// Add a "path" property for each category for linking
const productCategories = [
  {
    icon: <FaLeaf className="text-4xl text-lime-600" />, // Saree
    title: "Sarees",
    desc: "Elegant traditional and designer sarees with exquisite craftsmanship.",
    highlights: [
      "Cotton Sarees",
      "Silk Sarees",
      "Georgette Sarees",
      "Banarasi Sarees",
      "Embroidered Sarees",
      "Printed Sarees",
      "Party Wear Sarees",
      "Casual Sarees",
    ],
    extra: "Each saree is carefully sourced for quality, variety, and comfort.",
    img: "/Products/sarees.jpg",
    path: "/products/sarees",
  },
  {
    icon: <FaRegLemon className="text-4xl text-lime-600" />, // Blouse
    title: "Blouses",
    desc: "Designer and ready-made blouses to complement every saree style.",
    highlights: [
      "Cotton Blouses",
      "Silk Blouses",
      "Embroidered Blouses",
      "Readymade Blouses",
      "Custom Tailored Blouses",
      "Sleeveless & Full Sleeve Options",
    ],
    extra: "Premium fabric quality, comfortable fit, and modern patterns.",
    img: "/Products/blouse.jpg",
    path: "/products/blouses",
  },
  {
    icon: <FaSeedling className="text-4xl text-lime-600" />, // Lady Suit
    title: "Ladies Suits",
    desc: "Chic and comfortable ladies suits for formal and casual occasions.",
    highlights: [
      "Punjabi Suits",
      "Salwar Kameez",
      "Churidar Suits",
      "Anarkali Suits",
      "Designer Partywear",
      "Unstitched Dress Materials",
    ],
    extra: "Wide range of colors, fabrics, and designs for every preference.",
    img: "/Products/suit.jpg",
    path: "/products/ladies-suits",
  },
  {
    icon: <FaCarrot className="text-4xl text-lime-600" />, // Kurtis
    title: "Kurtis",
    desc: "Trendy kurtis in modern and ethnic styles for everyday elegance.",
    highlights: [
      "Cotton Kurtis",
      "Anarkali Kurtis",
      "Long & Short Kurtis",
      "Printed Kurtis",
      "Embroidered Kurtis",
      "Designer Kurtis",
    ],
    extra: "Perfect for daily wear, work, or festive occasions.",
    img: "/Products/kurti.jpg",
    path: "/products/kurtis",
  },
  {
    icon: <FaLeaf className="text-4xl text-lime-600" />, // Shawl
    title: "Shawls",
    desc: "Luxurious shawls to add warmth and sophistication to any outfit.",
    highlights: [
      "Woolen Shawls",
      "Pashmina Shawls",
      "Printed Shawls",
      "Embroidered Shawls",
      "Designer Wraps",
    ],
    extra: "Soft, elegant, and perfect for gifting or personal use.",
    img: "/Products/shawl.jpg",
    path: "/products/shawls",
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
