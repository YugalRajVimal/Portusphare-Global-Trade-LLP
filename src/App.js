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

// Per ProductsPage.js (context), productCategories:
const productCategories = [
  {
    icon: null, // Icons only for display, not needed here.
    title: "Indian Spices",
    desc: "Authentic, aromatic, and rich in flavor.",
    highlights: [
      "Turmeric",
      "Red Chilli",
      "Cumin",
      "Coriander",
      "Garam Masala Blends",
      "Cardamom",
      "Black Pepper",
      "Mustard Seeds",
      "Fennel Seeds",
      "Fenugreek",
      "And many more…",
    ],
    extra: "We ensure clean processing, hygienic packaging, and export-grade standards.",
    img: "/Products/spices.jpg",
    path: "/products/indian-spices"
  },
  {
    icon: null,
    title: "Fresh Vegetables",
    desc: "Sourced directly from farms, harvested at perfect maturity.",
    highlights: [
      "Onions",
      "Potatoes",
      "Tomatoes",
      "Green Chillies",
      "Okra",
      "Drumstick",
      "Lemon",
      "Cabbage",
      "Cauliflower",
      "Seasonal Vegetables",
    ],
    extra: "We maintain freshness through cold-chain logistics.",
    img: "/Products/vegies.webp",
    path: "/products/fresh-vegetables"
  },
  {
    icon: null,
    title: "Grains & Pulses",
    desc: "Premium-quality Indian staples for bulk and retail buyers.",
    highlights: [
      "Basmati Rice",
      "Non-Basmati Rice",
      "Wheat",
      "Maize",
      "Millet",
      "Pulses",
    ],
    extra: "Packed with nutrition, purity, and consistency.",
    img: "/Products/pulces.jpeg",
    path: "/products/grains-pulses"
  },
  {
    icon: null,
    title: "Dry Fruits",
    desc: "Finest quality dry fruits, handpicked for freshness and taste.",
    highlights: [
      "Cashew Nuts",
      "Almonds",
      "Pistachios",
      "Raisins",
      "Walnuts",
      "Dried Figs",
      "Dates",
      "Apricots",
      "Anjeer",
      "Mixed Dry Fruit Packs",
    ],
    extra: "Hygienically packed to preserve natural nutrition and flavor.",
    img: "/Products/dryfruits.jpg",
    path: "/products/dry-fruits"
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