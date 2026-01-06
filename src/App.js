import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import LandingPage from './Pages/LandingPage'
import "swiper/css";
import Footer from './Components/Footer';
import ContactUsPage from './Pages/ContactUsPage';
import AboutUsPage from './Pages/AboutUsPage';
import ProductsPage from './Pages/ProductsPage';
import SeperateProductPage from './Pages/SeperateProductPage';
import TextilePage from './Pages/TextilePage';
import { FaCarrot, FaLeaf, FaRegLemon, FaSeedling } from 'react-icons/fa';

// Per ProductsPage.js (context), productCategories:
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
    img: "/Products/saree.jpg",
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
    img: "/Products/ladies_suit.jpg",
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
    img: "/Products/kurtis.jpg",
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

const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/textile" element={<TextilePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          {/* Seperate product routes */}
          {productCategories.map((prod) => (
            <Route
              key={prod.path}
              path={prod.path}
              element={
                <SeperateProductPage
                  title={prod.title}
                  desc={prod.desc}
                  highlights={prod.highlights}
                  extra={prod.extra}
                  img={prod.img}
                />
              }
            />
          ))}
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App