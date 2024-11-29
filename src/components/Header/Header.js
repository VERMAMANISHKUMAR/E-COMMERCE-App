
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      {/* Logo */}
      <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
        BusyBuy
      </Navbar.Brand>

      {/* Toggler for mobile view */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          {/* Home Icon and Button */}
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <FaHome className="me-2" /> Home
          </Nav.Link>

          {/* Sign-in Icon and Button */}
          <Nav.Link as={Link} to="/signin" className="d-flex align-items-center">
            <FaSignInAlt className="me-2" /> Sign In
          </Nav.Link>

          <Nav.Link as={Link} to="/signup" className="d-flex align-items-center ms-3">
            {/* <Button variant="outline-primary">Sign Up</Button> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;

