import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      {/* Leaf Decoration (Right) */}
      {/* <img
        src="/leaf-right.png"
        alt="leaf"
        className="absolute right-0 top-0 w-56 opacity-30 pointer-events-none hidden md:block"
      /> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 relative">
        {/* LEFT IMAGE SECTION */}
        <div className="relative">
          {/* Organic Masked BG Image */}
          <div
            className={`
              transition-all duration-700
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <img
              src="/logo.jpeg"
              className="w-full h-[420px] md:h-[480px] object-cover rounded-[120px_0_120px_0] shadow-lg"
              alt="About Portusphare Global Trade LLP"
            />
          </div>

          {/* Circular Foreground Image */}
          <div
            className={`
              absolute -bottom-10 left-8 md:left-20
              transition-all duration-700 delay-200
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <img
              src="/logo.jpeg"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white"
              alt="Indian agriculture and farmer support"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 md:left-10 bg-white shadow-xl rounded-xl px-6 py-4 flex items-center gap-4">
              <div className="bg-lime-500 p-4 rounded-lg text-white text-2xl">🌱</div>
              <div>
                <p className="font-bold text-gray-700">Empowering</p>
                <p className="font-bold text-gray-700">Indian Farmers</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div
          className={`
            flex flex-col justify-center mt-8 md:mt-0
            transition-all duration-700 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* Section Title */}
          <p className="text-lime-600 font-semibold text-lg flex items-center gap-2">
            About Us <span className="w-10 h-1 bg-lime-500 inline-block rounded"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mt-3">
            Multi-Product Vegetable Export<br className="hidden sm:inline" /> House from India
          </h2>

          {/* Company Introduction */}
          <p className="text-gray-700 mt-6 text-lg">
            Portusphare Global Trade LLP is committed to supplying premium quality, residue-free vegetables to global markets.<br />
            Our strong farmer network, modern collection centers, and robust cold-chain logistics ensure strict quality and genuine farm-fresh delivery around the world.
          </p>

          {/* CTA + Company Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-10">
            <a
              href="#contact"
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-4 rounded-md shadow transition"
            >
              Contact Us &rarr;
            </a>
            <div className="flex flex-col">
              <p className="text-green-900 font-bold text-lg">Portusphare Global Trade LLP</p>
              <p className="text-gray-700 text-sm">B6/907, Supertech Eco Village -2, Greater Noida West</p>
              <a
                href="tel:+919560365050"
                className="text-lime-600 font-semibold text-sm mt-1 hover:underline"
              >+91 95603 65050</a>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section: Mission & Difference */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-24 px-6 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Card 1: Why We Exist */}
        <div className="flex-1 bg-lime-50 rounded-2xl shadow-md p-8 flex flex-col">
          <h4 className="font-semibold text-green-900 text-xl mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-lime-500" /> Why We Exist
          </h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
            <li>To promote Indian agriculture globally</li>
            <li>To uplift farmers with fair prices and modern farming techniques</li>
            <li>To offer global buyers reliable, consistent, and fresh produce</li>
          </ul>
        </div>
        {/* Card 2: What Makes Us Different */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col border border-lime-100">
          <h4 className="font-semibold text-green-900 text-xl mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-lime-500" /> What Makes Us Different
          </h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
            <li>Direct sourcing from farmers</li>
            <li>Residue-free and certified products</li>
            <li>Complete export documentation support</li>
            <li>Temperature-controlled packing &amp; shipping</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
