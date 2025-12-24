import React from "react";
import { Link } from "react-router-dom";

export default function HomeTextileSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fcfefd] via-[#f5fce8] to-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">

        {/* Left Content */}
        <div>
          <h3 className="text-lime-700 font-semibold tracking-widest uppercase mb-2">
            Our Division
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lime-900 mb-4">
            Textile & Cloth Division
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            At <strong>Portusphere Global Trade LLP</strong>, our Textile & Cloth
            division blends India’s rich weaving heritage with modern quality
            standards. We source and supply premium fabrics, traditional textiles,
            and home furnishing materials for domestic and global markets.
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 text-green-900">
            <li className="flex items-center">
              <span className="text-lime-600 mr-2">✔</span>
              Cotton, blended & synthetic fabrics
            </li>
            <li className="flex items-center">
              <span className="text-lime-600 mr-2">✔</span>
              Handloom & traditional Indian textiles
            </li>
            <li className="flex items-center">
              <span className="text-lime-600 mr-2">✔</span>
              Export-grade quality & ethical sourcing
            </li>
          </ul>

          {/* CTA */}
          <Link
            to="/textile"
            className="inline-flex items-center px-6 py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition shadow"
          >
            Explore Textile Division →
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/textileLogo.jpeg"
            alt="Textile & Cloth Division"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}
