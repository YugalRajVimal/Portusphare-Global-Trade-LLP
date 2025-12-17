import React from "react";

export default function TextilePage() {
  return (
     
    <section className="relative w-full  mt-16  pb-10  xs:mt-28 sm:mt-28 pt-10  overflow-hidden bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">
       
    <div className="flex items-center gap-3 mb-6 justify-center text-center w-full">
      <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
      <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">Textile & Cloth Division
      </span>
      <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
    </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
       
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-1">
            Portusphere Global Trade LLP
          </h2>
          <p className="text-lg text-green-800 font-medium mb-2">
            Weaving Quality, Delivering Trust
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            At Portusphere Global Trade LLP, our Textile & Cloth division represents India’s rich weaving heritage combined with modern quality standards. We source, process, and supply premium textiles and fabrics for domestic and international markets, ensuring consistency, durability, and ethical sourcing.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-20 border-t-2 border-lime-500"></div>
        </div>

        {/* Our Textile Range */}
        <section>
          <h3 className="text-2xl font-bold text-lime-800 mb-6 text-center">
            Our Textile Range
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Cotton Fabrics */}
            <div className="bg-lime-50 rounded-2xl shadow p-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🧵</span>
                <span className="font-bold text-lime-900 text-lg">
                  Cotton Fabrics
                </span>
              </div>
              <ul className="list-disc list-inside ml-3 text-gray-700 space-y-1">
                <li>100% Pure Cotton</li>
                <li>Organic &amp; Sustainable Cotton</li>
                <li>Cambric, Poplin, Voile, Slub Cotton</li>
                <li>Suitable for garments, uniforms &amp; home textiles</li>
              </ul>
            </div>
            {/* Blended & Synthetic Fabrics */}
            <div className="bg-emerald-50 rounded-2xl shadow p-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🧶</span>
                <span className="font-bold text-lime-900 text-lg">
                  Blended &amp; Synthetic Fabrics
                </span>
              </div>
              <ul className="list-disc list-inside ml-3 text-gray-700 space-y-1">
                <li>Cotton Blends</li>
                <li>Polyester &amp; Viscose Fabrics</li>
                <li>Rayon &amp; Lycra Blends</li>
                <li>Fashion, industrial &amp; upholstery use</li>
              </ul>
            </div>
            {/* Traditional Indian Textiles */}
            <div className="bg-orange-50 rounded-2xl shadow p-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🪡</span>
                <span className="font-bold text-lime-900 text-lg">
                  Traditional Indian Textiles
                </span>
              </div>
              <ul className="list-disc list-inside ml-3 text-gray-700 space-y-1">
                <li>Handloom Fabrics</li>
                <li>Powerloom Cloth</li>
                <li>Regional specialty weaves</li>
                <li>Artisan-supported sourcing</li>
              </ul>
            </div>
            {/* Home Textile Materials */}
            <div className="bg-lime-100 rounded-2xl shadow p-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🧺</span>
                <span className="font-bold text-lime-900 text-lg">
                  Home Textile Materials
                </span>
              </div>
              <ul className="list-disc list-inside ml-3 text-gray-700 space-y-1">
                <li>Bed Linen Fabric</li>
                <li>Curtains &amp; Upholstery Cloth</li>
                <li>Towels &amp; Terry Fabrics</li>
                <li>Cushion &amp; Sofa Fabrics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <div className="w-28 border-t-2 border-lime-400"></div>
        </div>

        {/* Quality & Sourcing */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-lime-800 mb-4 text-center">
            Quality &amp; Sourcing
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-5 text-center">
            We work directly with weavers, textile units, and fabric manufacturers across India to ensure:
          </p>
          <ul className="max-w-md mx-auto mb-5 text-green-900 text-base space-y-1">
            <li className="flex items-center">
              <span className="text-lime-600 text-lg mr-2">✔</span>
              Consistent quality standards
            </li>
            <li className="flex items-center">
              <span className="text-lime-600 text-lg mr-2">✔</span>
              Export-grade finishing
            </li>
            <li className="flex items-center">
              <span className="text-lime-600 text-lg mr-2">✔</span>
              Ethical &amp; sustainable sourcing
            </li>
            <li className="flex items-center">
              <span className="text-lime-600 text-lg mr-2">✔</span>
              Competitive pricing
            </li>
          </ul>
          <p className="text-gray-600 text-center">
            Each batch is inspected for strength, colorfastness, texture, and compliance with buyer requirements.
          </p>
        </section>

        {/* Export & Domestic Supply */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-lime-800 mb-4 text-center">
            Export &amp; Domestic Supply
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-5 text-center">
            We cater to:
          </p>
          <ul className="md:grid md:grid-cols-2 gap-2 list-disc list-inside text-green-900 max-w-md mx-auto space-y-1 md:space-y-0 mb-3">
            <li>Garment Manufacturers</li>
            <li>Fashion Brands</li>
            <li>Wholesalers &amp; Retailers</li>
            <li>Interior &amp; Home Textile Buyers</li>
            <li>International Importers</li>
          </ul>
          <p className="text-gray-600 text-center">
             Our strong logistics network enables timely deliveries across India and overseas markets.
          </p>
        </section>

        {/* Karigar Empowerment */}
        <div className="flex justify-center mb-8">
          <div className="w-20 border-t-2 border-lime-400"></div>
        </div>
        <section>
          <h3 className="text-2xl font-bold text-lime-900 mb-4 text-center">Karigar Empowerment</h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
            At Portusphere Global Trade LLP, we believe true quality begins with skilled hands. We work directly with local <span className="font-semibold text-green-800">karigars</span>, ensuring fair wages, skill development, and sustainable livelihoods. By empowering artisans, we preserve traditional craftsmanship while delivering premium textiles and cloth to domestic and international markets.
          </p>
        </section>
      </div>
    </section>
  );
}
