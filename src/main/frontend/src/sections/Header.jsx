import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import { SiProcesswire } from "react-icons/si";

const Header = () => {
  return (
    <Navbar expand="lg" id="header">
      <Navbar.Brand href="/" id="logo">
        <SiProcesswire size={50} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/" className="link-menu">
              Home
            </Link>
          </Nav.Link>
          <NavDropdown title="Modules" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/modules/guides" className="link-menu">
                Guides
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/modules/form" className="link-menu">
                Form
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/modules/list" className="link-menu">
                List
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Processes" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/processes/guides" className="link-menu">
                Guides
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/processes/form" className="link-menu">
                Form
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/processes/list" className="link-menu">
                List
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
