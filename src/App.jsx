import React, { useEffect } from 'react';
import { useLocation, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Booking } from './Pages/Booking/Booking';
// import Checkbooking from "./components/Checkbooking"; // Uncomment if needed

// import "./App.css";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/check-booking" element={<Checkbooking />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
