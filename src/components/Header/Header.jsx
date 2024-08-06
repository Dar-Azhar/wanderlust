import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menu from '../../assets/images/burger-menu-svgrepo-com.svg'
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import './Header.scss'


export function Header() {
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navBar = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    const handleScrollDisable = () => {
      if (isNavOpen) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflow = 'auto'; // Enable scrolling
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    handleScrollDisable();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled when the component is unmounted
    };
  }, [isNavOpen]);


  return (
    // <>
    //   <div className="container-fluid p-0">
    //     <div className="row">
    //       <div className="col  img-fluid ">
    //         <Navbar
    //           expand="lg"
    //           sticky="top"
    //           className=" bg-dark uppernavbar justify-content-end"
    //           data-bs-theme="" 

    //         >
    //           <Container className="navbar ">
    //             <Navbar.Brand href="/" className="navbar-custom">WanderLust Travels</Navbar.Brand>
    //             <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //               <Nav className="ms-auto d-flex">
    //                 <Nav.Link as={Link}  to="/" className="nav-link-custom">Home</Nav.Link>
    //                 <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
    //                 <Nav.Link as={Link}  to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
    //                 <Nav.Link as={Link}  to="/booking" className="nav-link-custom">Book your Slot Now</Nav.Link>

    //               </Nav>
    //             </Navbar.Collapse>
    //           </Container>
    //         </Navbar>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <header className="main-header" ref={dropdownRef}>
      <h1 className="main-title" onClick={() => navigate('/')}>WanderLust Travels</h1>
      <nav className="nav">
        <button className="nav-toggle" id="nav-toggle" onClick={() => navBar()} >
          <span className="nav-toggle-icon"><img src={menu} alt="hamburger" /></span>
        </button>
        <ul className={`nav-list ${isNavOpen ? 'nav-list-active' : ''}`} id='nav-list'>
          <li className="li"><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}> Home</NavLink></li>
          <li className="li"><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} >About Us</NavLink></li>
          <li className="li"><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} >Contact Us</NavLink></li>
          <li className="li"><NavLink to="/booking" className={({ isActive }) => (isActive ? 'active' : '')} >Booking</NavLink></li>
          <li className="li"><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')} >Blogs</NavLink></li>
          <li className="li"><NavLink to="/logIn" className={({ isActive }) => (isActive ? 'active' : '')} >Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

