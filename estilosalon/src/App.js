import  { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import CarouselFadeExample from "./components/CarouselFadeExample";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";
import "./components/Footer.css";
import Owner from "./components/Owner";
import Superuser from "./components/Superuser";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const hiddenCarouselPaths = [
      "/About",
      "/Services",
      "/Contact",
      "/Owner",
      "/Superuser",
      "/BookAppointment",
      "/Pricing",
      "/dashboard"
    ];

    setShowCarousel(!hiddenCarouselPaths.includes(location.pathname));
  }, [location.pathname]);

  const isHomePage = location.pathname === "/Body";

  return (
    <>
      <Navbar />

      {showCarousel && <CarouselFadeExample />}
      {isHomePage && <Owner />}

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/Superuser" element={<Superuser />} />

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
      </Routes>
          <Owner/>
      <Footer />
    </>
  );
}

export default App;
