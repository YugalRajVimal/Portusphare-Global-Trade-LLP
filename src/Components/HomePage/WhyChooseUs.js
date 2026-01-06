import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="relative w-full py-14 xs:py-16 sm:py-20 md:py-24 bg-green-50 overflow-hidden">
      {/* Decorative BG */}
      <img
        src="/leaf-bg-right.png"
        alt=""
        className="absolute right-0 top-0 opacity-[0.15] w-[200px] xs:w-[250px] md:w-[350px] pointer-events-none hidden md:block"
      />
      <img
        src="/leaf-bg-left.png"
        alt=""
        className="absolute left-0 bottom-0 opacity-[0.15] w-[160px] xs:w-[200px] md:w-[300px] pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`
            text-center transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-lime-600 font-semibold text-base xs:text-lg flex items-center gap-2 xs:gap-3 justify-center">
            <span className="w-7 xs:w-10 h-[2px] bg-lime-500"></span>
            WHY CHOOSE PORTUSPHERE FOR TEXTILE EXPORTS?
            <span className="w-7 xs:w-10 h-[2px] bg-lime-500"></span>
          </p>
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-extrabold text-green-900 mt-3">
            Setting Global Standards in Indian Textiles
          </h2>
        </div>

        {/* Main Responsive Layout */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col-reverse md:flex-row gap-10 md:gap-14 items-center">
          {/* LEFT COLUMN - Textile Features */}
          <div
            className={`
              flex-1 w-full
              grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7
              transition-all duration-700 delay-150
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            {/* Direct procurement from leading Indian mills */}
            <div className="flex flex-col items-center justify-center bg-white text-green-900 shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Direct procurement from renowned Indian textile mills
              <span className="text-green-700 text-xs mt-2 font-normal">
                (Cotton yarn, fabrics, apparel, &amp; home textiles)
              </span>
            </div>
            {/* Certified Quality */}
            <div className="flex flex-col items-center  justify-center bg-lime-100 text-lime-700 shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Internationally certified quality standards
              <span className="text-lime-700 text-xs mt-2 font-normal">
                (OEKO-TEX, GOTS, ISO, &amp; more)
              </span>
            </div>
            {/* Cutting-edge Manufacturing */}
            <div className="bg-white text-green-900 flex flex-col items-center  justify-center shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Modern, tech-driven manufacturing facilities
              <span className="block text-xs text-gray-600 mt-2 font-normal">
                (Automated mills, stringent QC, sustainable practices)
              </span>
            </div>
            {/* Adaptable MOQs & Pricing */}
            <div className="bg-lime-100 text-lime-700 flex flex-col items-center  justify-center shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Competitive prices &amp; flexible MOQs
              <span className="block text-xs text-gray-600 mt-2 font-normal">
                (Serving both bulk and specialized requirements)
              </span>
            </div>
            {/* Customized Branding & Packaging */}
            <div className="flex flex-col items-center  justify-center bg-white text-green-900 shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Bespoke packaging &amp; strong branding solutions
              <span className="text-green-700 text-xs mt-2 font-normal">
                (Retail-ready and custom overseas packaging options)
              </span>
            </div>
            {/* Global Logistics */}
            <div className="flex flex-col items-center  justify-center bg-lime-100 text-lime-700 shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug">
              Efficient international logistics &amp; timely delivery
              <span className="text-lime-700 text-xs mt-2 font-normal">
                (Pan-India access, reliable global shipping)
              </span>
            </div>
            {/* Social Responsibility */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center bg-gradient-to-r from-green-50 via-lime-50 to-white text-green-900 shadow-xl rounded-xl px-6 py-6 sm:py-8 text-center font-semibold text-base xs:text-lg sm:text-xl leading-snug mt-1">
              <div className="flex flex-wrap gap-6 justify-center mb-2">
                {/* <img
                  src="/Banner/Textile3.png"
                  alt="Textile Artisans"
                  className="w-12 h-12 object-cover rounded-full"
                /> */}
              </div>
              Committed to ethical trade &amp; artisan empowerment
              <span className="block text-xs text-gray-700 mt-2 font-normal">
                Uplifting Indian textile workers through fair business practices
              </span>
            </div>
          </div>
          {/* RIGHT COLUMN - Textile Images Only */}
          <div className="relative flex-shrink-0 w-full md:w-1/3 flex mb-2 md:mb-0">
            <div
              className={`
                w-full
                transition-all duration-700 delay-500
                ${animate ? "opacity-100 " : "opacity-0"}
              `}
            >
              <div className="flex flex-col gap-4">
                <img
                  src="/textile.jpg"
                  alt="Quality Indian Textile"
                  className="rounded-xl shadow-xl w-full object-cover max-h-60 xs:max-h-72 md:max-h-[210px] mb-4"
                />
                <div className="flex gap-4">
                  <img
                    src="/textile2.webp"
                    alt="Fabrics Range"
                    className="rounded-xl shadow-md w-1/2 object-cover h-28 xs:h-36"
                  />
                  <img
                    src="/textile3.jpg"
                    alt="Textile Production"
                    className="rounded-xl shadow-md w-1/2 object-cover h-28 xs:h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

