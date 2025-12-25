import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/**
 * This uses Swiper's default slide animation, and custom transition classes for
 * right-to-left animation on the TestimonialCard.
 */
export default function TestimonialComponent() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  // Testimonials covering BOTH textile and agriculture (not just one)
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      clientName: "Abdul Rahman",
      role: "Importer, UAE",
      text: "Excellent quality and timely shipments from Portusphere. Produce always arrives fresh and as promised.",
      stars: 5,
      products: ["Agriculture"], // <-- added type for clarity
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      clientName: "Meena Devi",
      role: "Partner Farmer, UP",
      text: "The Farmer Support Program helped me improve my yield and secure fair, assured prices for my vegetables.",
      stars: 5,
      products: ["Agriculture"],
    },
    {
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      clientName: "Rohan S.",
      role: "Textile Buyer, Maharashtra",
      text: "Your textile export quality is exactly as described – colors are fast, fabric is comfortable, and packaging is top-notch. Our apparel clients are pleased.",
      stars: 5,
      products: ["Textiles"],
    },
    {
      img: "https://randomuser.me/api/portraits/women/42.jpg",
      clientName: "Priya Sharma",
      role: "Home Decor Exporter, UK",
      text: "Beautiful home textile products – cushion covers and fabrics arrived in excellent condition and with vibrant prints, appreciated by my UK clients.",
      stars: 5,
      products: ["Textiles"],
    },
    {
      img: "https://randomuser.me/api/portraits/men/83.jpg",
      clientName: "Sanjay Patel",
      role: "Retailer, Gujarat",
      text: "Consistent quality and clean packing. Our store customers love the freshness. Highly recommended!",
      stars: 5,
      products: ["Agriculture"],
    },
    {
      img: "https://randomuser.me/api/portraits/men/61.jpg",
      clientName: "Luis Carlos",
      role: "Distributor, Spain",
      text: "Seamless export process and friendly team. Sourcing Indian vegetables is now reliable and easy.",
      stars: 5,
      products: ["Agriculture"],
    },
    {
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      clientName: "Natalia Jimenez",
      role: "Import Manager, Mexico",
      text: "Both the fresh vegetables and the textiles in our order were of superb quality and precisely matched our expectations. Two divisions, one reliable partner.",
      stars: 5,
      products: ["Agriculture", "Textiles"], // Both!
    },
  ];

  // To track swipe direction for animating entrance/exit
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("rtl"); // "rtl" for right-to-left, "ltr" for left-to-right

  const swiperRef = useRef(null);

  // Swiper's onSlideChange callback handler
  const handleSlideChange = (swiper) => {
    // Determine direction (Swiper's rtl movement is next slide decreases index)
    if (swiper.previousIndex === undefined) return;
    if (swiper.activeIndex > swiper.previousIndex ||
      (swiper.activeIndex === 0 && swiper.previousIndex === testimonials.length - 1)
    ) {
      setDirection("ltr");
    } else {
      setDirection("rtl");
    }
    setCurrent(swiper.realIndex);
  };

  return (
    <section className="relative pt-16  pb-20 md:pb-48 bg-gradient-to-b from-white to-[#f3ffe7] overflow-hidden">
      {/* Left concentric circle visuals */}
      <div className="absolute left-0 top-1/2 mt-24 md:ml-10 -translate-y-1/2 hidden md:block">
        <OrbitalClients />
      </div>

      {/* Heading */}
      <div
        className={`
          text-center mb-8 md:mb-16 transition-all duration-700
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <p className="text-lime-600 font-semibold text-lg flex items-center gap-3 justify-center">
          <span className="w-10 h-[2px] bg-lime-500"></span>
          Our Clients
          <span className="w-10 h-[2px] bg-lime-500"></span>
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
          What Our Clients Say
        </h2>
        <div className="mt-3 flex justify-center flex-wrap gap-3">
          <span className="inline-flex items-center bg-lime-100 text-lime-700 text-sm font-semibold rounded-full px-4 py-1">
            Agriculture
          </span>
          <span className="inline-flex items-center bg-lime-100 text-lime-700 text-sm font-semibold rounded-full px-4 py-1">
            Textiles
          </span>
        </div>
      </div>

      {/* Swiper */}
      <div className=" mt-10 md:mt-32 mx-4 md:mx-10  px-2 md:px-6 md:pl-[50%] relative z-10">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, A11y]}
          autoplay={{
            delay: 2000, // autoplay every 2 sec
            disableOnInteraction: false,
            reverseDirection: true, // animate right-to-left
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          a11y={{
            prevSlideMessage: "Previous testimonial",
            nextSlideMessage: "Next testimonial",
            firstSlideMessage: "This is the first testimonial",
            lastSlideMessage: "This is the last testimonial"
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          className="group "
          onSlideChange={handleSlideChange}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard
                item={item}
                animate={animate && i === current}
                direction={direction}
                index={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* -----------------------------------
   Testimonial Card (Animated Left-to-Right or Right-to-Left)
----------------------------------- */
function TestimonialCard({ item, animate, direction, index }) {
  // Animate: true for current card.
  // direction: "rtl" for appearing from right to left.

  // Set translation based on direction:
  let initTranslate = direction === "rtl" ? "translate-x-10" : "-translate-x-10";

  return (
    <div
      className={`
        bg-white my-auto rounded-xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start
        transition-all duration-700
        ${animate ? "opacity-100 translate-x-0" : `opacity-0 ${initTranslate}`}
      `}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Image + Quote badge */}
      <div className="relative">
        <img
          src={item.img}
          alt="client"
          className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
        />
        <div className="absolute -right-4 bottom-0 bg-lime-500 text-white p-3 rounded-full shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 17h1l2-5V7H6v5h1l-2 5h2zm9 0h1l2-5V7h-4v5h1l-2 5h2z" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-gray-600 leading-relaxed">{item.text}</p>

        <h3 className="text-green-900 font-extrabold text-xl mt-6">{item.clientName}</h3>
        <p className="text-gray-500 text-sm">{item.role}</p>
        {/* Highlight the supplied products: */}
        <div className="flex gap-2 mt-2">
          {item.products && item.products.map((prod, idx) => (
            <span
              key={prod + idx}
              className={`inline-block bg-lime-100 text-lime-600 font-semibold rounded px-3 py-0.5 text-xs border border-lime-200`}
            >
              {prod}
            </span>
          ))}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: item.stars }).map((_, i) => (
            <span key={i} className="text-lime-500 text-xl" aria-label="star">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------
   Orbital Clients (Left Side Circles)
----------------------------------- */
function OrbitalClients() {
  // Use sample user images from randomuser.me and unsplash
  const clients = [
    "https://randomuser.me/api/portraits/men/95.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/women/63.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/men/51.jpg",
    "https://randomuser.me/api/portraits/women/78.jpg",
  ];

  return (
    <div className="relative w-[600px] h-[600px]">

      {/* Concentric Circles */}
      {/* <div className="absolute inset-0 rounded-full border-[2px] border-lime-200" /> */}
      <div className="absolute inset-10 rounded-full border-[2px] border-lime-200" />
      <div className="absolute inset-20 rounded-full border-[2px] border-lime-200" />

      {/* Center Glow */}
      <div className="absolute inset-[140px] rounded-full bg-lime-100 opacity-40 blur-2xl" />

      {/* Center Person */}
      <img
        src="https://randomuser.me/api/portraits/men/15.jpg"
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full object-cover -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-xl"
        alt="center client"
      />

      {/* Orbiting Clients */}
      {clients.map((c, i) => (
        <img
          key={i}
          src={c}
          className="absolute w-20 h-20 rounded-full object-cover shadow-xl"
          style={orbitPositions[i]}
          alt={`client ${i + 1}`}
        />
      ))}
    </div>
  );
}

/* Fixed positions for orbit images */
const orbitPositions = [
  { top: "10%", left: "55%" },
  { top: "25%", left: "5%" },
  { top: "65%", left: "12%" },
  { top: "78%", left: "55%" },
  { top: "30%", left: "82%" },
  { top: "60%", left: "85%" },
];
