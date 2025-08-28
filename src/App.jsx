import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import ServicesHeader from "./components/ServicesHeader";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";  
import DoneForYou from "./components/DoneForYou";  
import GrowthSection from "./components/GrowthSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ServicesHeader />
              <Services />
              <Features />
              <GrowthSection />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />  

        {/* Done For You Page */}
        <Route path="/doneforyou" element={<DoneForYou />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
