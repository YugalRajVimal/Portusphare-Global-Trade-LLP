import { useEffect, useState } from "react";

export default function SeperateProductPage({
  title = "Product Name",
  img = "/Products/placeholder.jpg",
  desc = "This is a short product description. Replace with real content.",
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
            flex flex-col  gap-10 md:gap-6 items-center pb-6 px-6 md:px-12 mt-4 transition-all duration-700
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
          <div className="w-full flex flex-col justify-center">
            
            {highlights && highlights.length > 0 && (
              <>
                {/* <h2 className="text-lime-700 font-semibold mb-2">Highlights:</h2> */}
                <div className=" gap-5 mb-8">
                {highlights && highlights.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full">
    {highlights.map((item, idx) => (
      <div
        key={idx}
        className="rounded-2xl border border-lime-200 bg-lime-50 px-5 py-4 text-center shadow-md hover:bg-lime-100 transition"
      >
        <h4 className="text-green-900 font-bold text-base mb-1">
          {item.name}
        </h4>
        <p className="text-sm text-gray-600">{item.line1}</p>
        <p className="text-sm text-gray-500">{item.line2}</p>
      </div>
    ))}
  </div>
)}

                </div>
              </>
            )}


            {extra && <p className="mt-2 text-center text-gray-500">{extra}</p>}
            {/* Place for children content, e.g., buttons */}
            <div className="mt-6">{children}</div>
          </div>
        </div>

        <section className="mt-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-8 text-center">
    Why Choose Our Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        title: "Export Quality",
        desc: "Strict quality checks to meet international standards."
      },
      {
        title: "Hygienic Packaging",
        desc: "Processed and packed in clean, certified facilities."
      },
      {
        title: "Bulk & Retail Supply",
        desc: "Flexible quantities for wholesalers and distributors."
      },
      {
        title: "Farm-Fresh Sourcing",
        desc: "Direct sourcing ensures better freshness and pricing."
      },
      {
        title: "Timely Delivery",
        desc: "Reliable logistics and cold-chain support."
      },
      {
        title: "Consistent Quality",
        desc: "Uniform grading and sorting in every batch."
      }
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

<section className="mt-10 bg-white/70 rounded-3xl p-8 shadow-lg">
  <h2 className="text-2xl font-bold text-green-900 mb-6">
    Packaging & Availability
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
    <div>
      <h3 className="font-semibold text-green-800 mb-2">Packaging Options</h3>
      <ul className="space-y-1 text-sm">
        <li>• 5kg / 10kg / 25kg bags</li>
        <li>• Custom bulk packaging</li>
        <li>• Private labeling available</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-green-800 mb-2">Supply Capability</h3>
      <ul className="space-y-1 text-sm">
        <li>• Year-round availability</li>
        <li>• Domestic & export markets</li>
        <li>• MOQ based on product type</li>
      </ul>
    </div>

  </div>
</section>

<section className="mt-20 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">
    Interested in Bulk Orders?
  </h2>
  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Contact us today for pricing, samples, and export inquiries.
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
      View All Products
    </a>
  </div>
</section>



 
      </div>
    </main>
  );
}
