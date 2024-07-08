import React from "react";
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col  img-fluid ">
            <Navbar
              expand="lg"
              sticky="top"
              className=" bg-dark uppernavbar justify-content-end"
              data-bs-theme="" 
              
            >
              <Container className="navbar ">
                <Navbar.Brand href="/" className="navbar-custom">WanderLust Travels</Navbar.Brand>
                <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto d-flex">
                    <Nav.Link as={Link}  to="/" className="nav-link-custom">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
                    <Nav.Link as={Link}  to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
                    <Nav.Link as={Link}  to="/booking" className="nav-link-custom">Book your Slot Now</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
