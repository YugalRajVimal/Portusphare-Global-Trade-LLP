import { useEffect, useState } from "react";

// Textile product categories - Saree, Blouse, Lady Suit, Kurtis, Shawl, Many More
const textileCategories = [
  {
    title: "Saree",
    desc: "Elegant Indian sarees in a variety of weaves, prints, and embroidery — celebrating the artistry of Indian textiles.",
    highlights: [
      "Kanjeevaram Silk Sarees",
      "Banarasi Sarees",
      "Cotton Handloom Sarees",
      "Chiffon and Georgette Sarees",
      "Embroidered & Designer Sarees",
      "Block Print and Regional Varieties",
      "And many more styles…",
    ],
    img: "/Products/sarees.jpg",
    path: "/products/textile/saree",
    extra: "Customization and export packing available for bulk as well as boutique requests.",
  },
  {
    title: "Blouse",
    desc: "Blouses matching every taste — from timeless classics to trendy designer creations, tailored for global clients.",
    highlights: [
      "Ready-to-wear Embroidered Blouses",
      "Plain & Printed Blouses",
      "Handcrafted Designer Blouses",
      "Satin, Cotton, Silk, and Synthetic Fabrics",
      "Custom Styles & Sizing",
      "Work-wear & Occasion Blouses",
      "And more options…",
    ],
    img: "/Products/blouse.jpg",
    path: "/products/textile/blouse",
    extra: "Quality stitching, intricate details, and high versatility in designs.",
  },
  {
    title: "Lady Suit",
    desc: "Premium lady suits and dress materials crafted to meet the diverse fashion needs around the world.",
    highlights: [
      "Salwar Kameez Sets",
      "Unstitched Dress Materials",
      "Embroidered & Printed Suits",
      "Anarkali & Churidar Styles",
      "Trendy Palazzo & Pant Suits",
      "Cotton, Chiffon, Silk, Georgette Materials",
    ],
    img: "/Products/suit.jpg",
    path: "/products/textile/ladysuit",
    extra: "Fabrics suited for comfort, durability, and elegance for all occasions.",
  },
  {
    title: "Kurtis",
    desc: "Versatile Kurtis for casual, festive, and office wear—fusing Indian tradition with contemporary fashion.",
    highlights: [
      "Straight, A-line, Flared, and Asymmetric Kurtis",
      "Embroidered & Printed Patterns",
      "Cotton, Rayon, Silk Blend, Georgette",
      "Designer, Festive, and Everyday Collections",
      "Custom Colors & Sizes",
    ],
    img: "/Products/kurti.jpg",
    path: "/products/textile/kurtis",
    extra: "Available for private label and wholesale programs.",
  },
  {
    title: "Shawl",
    desc: "Luxurious shawls and stoles drawing on the rich traditions of Indian textile art.",
    highlights: [
      "Pashmina & Wool Shawls",
      "Hand-embroidered Kashmiri Shawls",
      "Silk & Modal Stoles",
      "Digital Prints & Jacquard Weaves",
      "Plain, Patterned & Occasion Shawls",
    ],
    img: "/Products/shawl.jpg",
    path: "/products/textile/shawl",
    extra: "World-class finishing and packaging. Bulk & gifting orders serviced globally.",
  },
  {
    title: "And Many More",
    desc: "Explore our extended textile portfolio for every apparel and home decor requirement.",
    highlights: [
      "Dupatta & Scarves",
      "Home Textile: Bedlinen, Curtains, Table Linen",
      "Ready Garments: Suit Sets, Skirts, Pants, Jackets",
      "Menswear Fabrics & Regional Textiles",
      "Towels, Terry, and Institutional Textiles",
      "Custom Orders & Sourcing Solutions",
    ],
   
    path: "/products/textile",
    extra: "Partner with us for made-to-order, OEM, or signature collections. Enquire for details.",
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
           OUR TEXTILE CATEGORIES
          <span className="w-10 h-[2px] bg-lime-500"></span>
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
          Textile Product Categories
        </h2>
        <p className="text-gray-600 text-base mt-3 max-w-2xl mx-auto">
          Discover the diverse range of Indian textile products we offer, crafted to global standards. From elegant sarees and kurtis to premium shawls and blouses — explore everything under one roof.
        </p>
      </div>

      {/* PRODUCT CARDS */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {textileCategories.map((cat, i) => (
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
              <a href={cat.path} className="block focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-full">
                <div className="relative mb-8 w-full flex justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-lime-50 flex items-center justify-center shadow-lg overflow-hidden">
                    {cat.img
                      ? <img src={cat.img} alt={cat.title} className="object-cover w-20 h-20" />
                      : (
                        <span
                          className="text-3xl text-lime-600"
                          role="img"
                          aria-label="textile"
                        >🧵</span>
                      )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="opacity-80 text-2xl" role="img" aria-label="textile">🧵</span>
                  </div>
                </div>
              </a>
              <h3 className="text-green-900 font-extrabold text-xl text-center mb-2">
                <a href={cat.path} className="hover:text-lime-700 transition-colors">{cat.title}</a>
              </h3>
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
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href={cat.path}
                className="rounded-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 text-sm shadow transition mr-2"
              >
                View {cat.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 mx-auto">
        <a
          href="/products/textile"
          className="rounded-full mx-auto border-2 border-lime-500 text-lime-700 px-10 py-4 font-bold text-lg bg-white hover:bg-lime-50 transition shadow-lg w-full max-w-xs text-center"
        >
          All Textile Products
        </a>
      </div>
    </section>
  );
}
