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
    icon: null,
    title: "Indian Spices",
    desc: "Authentic, aromatic, and rich in flavor.",
    highlights: [
      {
        name: "Turmeric",
        line1: "Golden yellow, high-curcumin variety.",
        line2: "Used in curries and as a natural colorant."
      },
      {
        name: "Red Chilli",
        line1: "Fiery hot and vibrant.",
        line2: "Sun-dried and finely ground."
      },
      {
        name: "Cumin",
        line1: "Earthy aroma & premium quality.",
        line2: "Available whole and ground."
      },
      {
        name: "Coriander",
        line1: "Fresh, citrusy flavor.",
        line2: "Adds aroma to Indian dishes."
      },
      {
        name: "Garam Masala Blends",
        line1: "Special house blend spices.",
        line2: "Customizable according to need."
      },
      {
        name: "Cardamom",
        line1: "Green and pure pods.",
        line2: "Intense, fragrant taste for desserts."
      },
      {
        name: "Black Pepper",
        line1: "Bold, hand-picked berries.",
        line2: "Packed for optimum freshness."
      },
      {
        name: "Mustard Seeds",
        line1: "Pungent, round seeds.",
        line2: "Used in tempering & pickling."
      },
      {
        name: "Fennel Seeds",
        line1: "Sweet and aromatic.",
        line2: "Acts as a digestive and flavoring."
      },
      {
        name: "Fenugreek",
        line1: "Bittersweet, high-quality seeds.",
        line2: "Used for flavoring and medicinal use."
      },
      {
        name: "And many more…",
        line1: "Varieties as per buyer request.",
        line2: "Custom packing and labeling available."
      }
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
      {
        name: "Onions",
        line1: "Firm, large bulbs; long shelf life.",
        line2: "Available in red and white varieties."
      },
      {
        name: "Potatoes",
        line1: "Fresh and starchy.",
        line2: "Packed for export and bulk buyers."
      },
      {
        name: "Tomatoes",
        line1: "Handpicked, juicy and ripe.",
        line2: "Great for sauces and salads."
      },
      {
        name: "Green Chillies",
        line1: "Spicy with bright color.",
        line2: "Farm-fresh and crisp delivery."
      },
      {
        name: "Okra",
        line1: "Tender and green.",
        line2: "Carefully sorted and graded."
      },
      {
        name: "Drumstick",
        line1: "Long, firm pods.",
        line2: "Packed for maximum freshness."
      },
      {
        name: "Lemon",
        line1: "Juicy & aromatic.",
        line2: "Available throughout the year."
      },
      {
        name: "Cabbage",
        line1: "Dense, crisp heads.",
        line2: "Cleaned and packed at farm."
      },
      {
        name: "Cauliflower",
        line1: "White, fresh florets.",
        line2: "Careful packaging & grading."
      },
      {
        name: "Seasonal Vegetables",
        line1: "Wide variety as per season.",
        line2: "Export-quality, on-demand supply."
      }
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
      {
        name: "Basmati Rice",
        line1: "Long-grained, aromatic.",
        line2: "Aged and extra fluffy when cooked."
      },
      {
        name: "Non-Basmati Rice",
        line1: "Various varieties available.",
        line2: "Great for daily meals and bulk buyers."
      },
      {
        name: "Wheat",
        line1: "High-protein, cleaned grains.",
        line2: "Custom packing as per buyer."
      },
      {
        name: "Maize",
        line1: "Yellow and white corn available.",
        line2: "Suitable for feed and food processing."
      },
      {
        name: "Millet",
        line1: "Nutrient-rich, multiple types.",
        line2: "Used in healthy, traditional foods."
      },
      {
        name: "Pulses",
        line1: "Lentils, chickpeas & beans.",
        line2: "Premium quality, cleaned and sorted."
      }
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
      {
        name: "Cashew Nuts",
        line1: "Whole & splits, rich in taste.",
        line2: "W320, W240, and other grades."
      },
      {
        name: "Almonds",
        line1: "Crunchy, high protein.",
        line2: "Regular and premium California types."
      },
      {
        name: "Pistachios",
        line1: "Natural and roasted.",
        line2: "Bulk packaging available."
      },
      {
        name: "Raisins",
        line1: "Sweet & juicy, seedless.",
        line2: "Green, golden, and black."
      },
      {
        name: "Walnuts",
        line1: "Cleaned, shelled or inshell.",
        line2: "Fresh and nutritious."
      },
      {
        name: "Dried Figs",
        line1: "Soft, sweet, fiber-rich.",
        line2: "Uniform size and quality."
      },
      {
        name: "Dates",
        line1: "Naturally sweet and plump.",
        line2: "Carefully sorted and packed."
      },
      {
        name: "Apricots",
        line1: "Tangy and soft, whole.",
        line2: "Sun-dried, no artificial preservatives."
      },
      {
        name: "Anjeer",
        line1: "Naturally dried, chewy.",
        line2: "Essential for health snacks."
      },
      {
        name: "Mixed Dry Fruit Packs",
        line1: "Premium assorted combinations.",
        line2: "Custom packs for gifting and export."
      }
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