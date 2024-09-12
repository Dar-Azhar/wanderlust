import React, { useEffect } from 'react';
import { useLocation, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Booking } from './Pages/Booking/Booking';
import { Login } from './Pages/Login/Login';
import { Blogs } from './Pages/Blogs/Blogs';
import { Register } from './Pages/Register/Register';
import { IndiBlogs } from './Pages/Blogs/IndiBlogs';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import PrivateRoute from './privateRoute';
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
        <Route path="/booking" element={
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        } />
        {/* <Route path="/check-booking" element={<Checkbooking />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        <Route path="/blogs" element={
          <Blogs />} />
        <Route path="/blogs/:id" element={<IndiBlogs />} />
      </Routes>
    </Router>
  );
}

export default App;
