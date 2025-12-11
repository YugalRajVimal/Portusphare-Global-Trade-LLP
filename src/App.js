import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import LandingPage from './Pages/LandingPage'
import "swiper/css";
import Footer from './Components/Footer';
// import "swiper/css/effect-fade";



const About = () => <div>About Page</div>

const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App