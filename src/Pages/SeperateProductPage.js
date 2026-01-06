import { useEffect, useState } from "react";

// This component renders a textile product detail page.
// "highlights" is a string array describing product features.

export default function SeperateProductPage({
  title = "Textile Product Name",
  img = "/Products/placeholder.jpg",
  desc = "A premium textile product – please update this description.",
  highlights = [],
  extra = "",
  children,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <main className="relative w-full mt-16 xs:mt-28 sm:mt-28 pt-10 overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pb-20">

        {/* HEADER */}
        <div
          className={`
            flex flex-col gap-10 md:gap-6 items-center pb-6 px-6 md:px-12 mt-4 transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-xl overflow-hidden bg-lime-50 p-4 shadow-sm">
              <img
                src={img}
                alt={title}
                className="object-cover w-72 h-72 md:w-80 md:h-80"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">{title}</h1>
            <p className="text-gray-700 text-lg mb-2">{desc}</p>
          </div>

          {/* Product Details */}
          <div className="w-full flex flex-col justify-center items-center">
            {highlights && highlights.length > 0 && (
              <div className="mb-8 w-full">
                <h2 className="text-lime-700 font-semibold mb-4 text-center text-xl">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-green-800 w-full max-w-3xl mx-auto">
                  {highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-lime-50 rounded-2xl border border-lime-100 px-6 py-4 shadow-sm text-base font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {extra && <p className="mt-2 text-center text-gray-500 max-w-2xl">{extra}</p>}
            {/* Place for children content, e.g., buttons */}
            <div className="mt-6">{children}</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-8 text-center">
            Why Choose Our Textiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Superior Fabric Quality",
                desc: "Crafted with premium threads for lasting softness and sheen.",
              },
              {
                title: "Diverse Designs & Patterns",
                desc: "From classic to contemporary, a style for every occasion.",
              },
              {
                title: "Expert Craftsmanship",
                desc: "Intricate weaving, dyeing, and finishing for exquisite details.",
              },
              {
                title: "Customization & Sizing",
                desc: "Available in a wide range of colors, patterns, and tailored sizes.",
              },
              {
                title: "Ethically Sourced Materials",
                desc: "Sustainable production practices and eco-friendly materials.",
              },
              {
                title: "Reliable Bulk Supply",
                desc: "Efficient handling for wholesalers, exporters, and retailers.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packaging & Availability */}
        <section className="mt-10 bg-white/70 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Packaging & Delivery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Packaging Options</h3>
              <ul className="space-y-1 text-sm">
                <li>• Individual polybag or customized packaging</li>
                <li>• Bulk carton or bale packing for exports</li>
                <li>• Private labeling and branding available</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Availability & Supply</h3>
              <ul className="space-y-1 text-sm">
                <li>• Large-scale manufacturing capacity</li>
                <li>• Steady stock for urgent orders</li>
                <li>• Global export and domestic shipping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">
            Ready to Elevate Your Textile Collection?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Reach out for catalogue, customization, and competitive quotations on our textile products.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact-us"
              className="rounded-full bg-green-700 text-white px-8 py-3 font-semibold hover:bg-green-800 transition"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="rounded-full border border-green-700 text-green-700 px-8 py-3 font-semibold hover:bg-green-50 transition"
            >
              Explore All Textiles
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
