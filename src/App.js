import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Checkbooking from "./components/Checkbooking";

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {


  return (
    
      <Router>
        <div id="rooot">
          <header>
        <Header />
        </header>
        <main>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/check-booking" element={<Checkbooking />} />
        </Routes>
        </main>
        
        <footer>
      <Footer />
      </footer>
      </div>
      </Router>
    
  );
}

export default App;
