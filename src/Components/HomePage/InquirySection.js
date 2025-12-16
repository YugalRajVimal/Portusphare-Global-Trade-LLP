import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function CTAInquirySection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="pb-10 px-4 pt-10 ">
      <div className="max-w-7xl mx-auto px-2 md:px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div
          className={`
            transition-all duration-700 my-auto
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h2 className="text-4xl font-extrabold text-green-900 mb-6">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 mb-8">
            Reach out for inquiries, partnerships, or support.  
            Our team is always ready to assist you.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-6 h-6 md:w-8 md:h-8 text-lime-600" />
              <p className="text-green-900 font-medium">
              B6/908, Supertech Eco Village -2 , Greater Noida West 
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8  text-lime-600" />
              <p className="text-green-900 font-medium">
              +91 95603 65050 
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 md:w-8 md:h-8  text-lime-600" />
              <p className="text-green-900 font-medium">
                support@domain.com
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-3 bg-white shadow-md rounded-full text-lime-600 hover:bg-lime-500 hover:text-white cursor-pointer transition"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>

          {/* MAP */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985087!2d72.74109949829348!3d19.082197839682178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630dd2e2ebf%3A0xdaa9bd6b69e5258b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-64"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="tel:+919560365050"
              className="bg-lime-600 text-white px-8 py-4 rounded-lg shadow-md font-semibold hover:bg-lime-700 transition flex items-center justify-center"
              rel="noopener noreferrer"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/place/B6/908,+Supertech+Eco+Village+2,+Greater+Noida+West"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-lime-600 px-8 py-4 rounded-lg shadow-md font-semibold hover:bg-lime-100 transition flex items-center justify-center"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div
          className={`
            bg-white shadow-xl p-4 md:p-10 rounded-2xl transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h3 className="text-2xl font-bold text-green-900 mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-v                               ff                                                                                                                                                                                                                                                                                             4">
            <div>
              <label className="text-green-900 font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-green-900 font-medium">Mobile No</label>
              <input
                type="tel"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="text-green-900 font-medium">Country</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Enter your country"
              />
            </div>

            <div>
              <label className="text-green-900 font-medium">Address</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Enter your address"
              />
            </div>

            {/* HSN Code Field */}
            <div>
              <label className="text-green-900 font-medium">HSN Code</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Enter HSN Code"
              />
            </div>

            <div>
              <label className="text-green-900 font-medium">Product</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Product you are interested in"
              />
            </div>

            <div>
              <label className="text-green-900 font-medium">Requirements or Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none"
                placeholder="Write your requirements or message..."
              ></textarea>
            </div>

            <button className="w-full mt-4 bg-lime-600 text-white py-4 rounded-lg font-semibold hover:bg-lime-700 transition shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
