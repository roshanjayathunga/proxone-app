/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Button,
  Col
} from "reactstrap"

class LandingNavbar extends React.Component {
  render() {
    return (
      <>
    <Navbar
          className="navbar-horizontal navbar-dark bg-default"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <h2 className="text-white">proXone</h2>
            </NavbarBrand>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto align-items-center" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="nav-link-inner--text">
                      About Us
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="nav-link-inner--text">
                      Contact Us
                    </span>
                  </NavLink>
                </NavItem>
                <span className="small text-white">Already Partner? </span>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                  
                  <Button className="btn-icon btn-3" color="secondary" type="button">
                  <span className="btn-inner--text">Login</span>
                  </Button>
                  </NavLink>
                </NavItem>

              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default LandingNavbar;
