import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Mmart from "./components/Mmart/Mmart";
import Food from "./components/Food/Food";
import Medical from "./components/Medical/Medical";
import RealEstate from "./components/RealEstate/RealEstate";
import Agriculture from "./components/Agriculture/Agriculture";
import Hospitality from "./components/Hospatility/Hospitality";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/GetFrenchieForm" element={<ContactUs />} />
        <Route path="/retail" element={<Mmart />} />
        <Route path="/food" element={<Food />} />
        <Route path="/health" element={<Medical />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/hospitality" element={<Hospitality />} />
      </Routes>
      <Footer />

      {/* Fixed Startup India Image - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-40 animate-pulse">
        <img
          src="src/assets/images/startupindia.jpeg"
          alt="Startup India"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </>
  );
}

export default App;
