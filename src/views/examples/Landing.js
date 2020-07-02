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
import { Container, Row, Col } from "reactstrap";
// reactstrap components
import {
  Button,
  Card,
  Badge,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

import LandingNavbar from "components/Navbars/LandingNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js"; 

class Landing extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-white");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-white");
  }
  render() {
    return (
      <>
      <LandingNavbar />
      <div className="main-content bg-white">
        <div
          className="header pb-8 pt-5 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-5" />
          {/* Header container */}
          <Container className="d-flex align-items-center">
            <Row className="d-flex align-items-center">
              <Col lg={6} md={6}>
                <h1 className="display-2 text-white">Let's grow together!</h1>
                <p className="text-white mt-0 mb-5">
                Gain resilience and agility, and position yourself for growth. 
                Proxone gives you the power to adapt business models 
                and processes quickly so you can reduce costs, sharpen forecasts, and innovate more.
                </p>

                <div className="d-flex">
                <Button color="info" size="lg" type="button">
                  Become a Partner
                </Button>
                {/* <Button color="default" size="lg" outline type="button">
                  Find a Partner
                </Button> */}
                </div>

              </Col>
              <Col lg={6} md={6}>
              {/* <img
                          alt="..."
                          style={{
                            maxWidth:"100%"
                          }}
                          src={require("assets/img/theme/cover-main.jpg")}
                          fluid
                        /> */}
                              {/* <img
                          alt="..."
                          style={{
                            maxWidth:"100%"
                          }}
                          src="https://image.freepik.com/free-vector/business-team-discussing-new-ideas_74855-5440.jpg"
                          fluid
                        /> */}
              </Col>
            </Row>
            
          </Container>
        </div>
        {/* Page content */}

        <section className="section section-lg pt-lg-0 mt--150">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h2 className="text-dark text-uppercase">
                            Win more deals
                          </h2>
                          <p className="description mt-3 text-dark">
                          Find and build stronger relationships. Improve productivity and performance.
                           Get a single view of customers.
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              Customer
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Sales
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Revenue
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h2 className="text-dark text-uppercase">
                              Increase customer demand
                          </h2>
                          <p className="description mt-3 text-dark">
                          Find and nurture the right leads. Create connected customer experiences.
                          Stay on top of market trends.
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              Business
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Succsess
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h2 className="text-dark text-uppercase">
                          Grow your business
                          </h2>
                          <p className="description mt-3 text-dark">
                          Redefine your traditional global financial management. Automate processes 
                          to increase efficiency.
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              Maketing
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Reputation
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              Revenue
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg mt-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/features.jpg")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1 className="display-2 text-dark">Awesome features</h1>
                    <p className="lead text-dark">
                    Find out how you can get ahead of the competition with the most 
                    innovative and flexible software and services options for your business.
                    </p>
                    <ul className="list-unstyled mt-2">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <p className="text-dark mb-0">
                            Comprehensive cloud solutions provide end-to-end support for your unique business needs.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <p className="text-dark mb-0">
                            Partner apps can help you solve specific business challenges and delight your business
                            </p>
                          </div>
                        </div>
                      </li>
                                              
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <p className="text-dark mb-0">
                            Robust tools to adapt to changing employee needs and help you succeed in the experience economy
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="d-flex align-items-center">
                    <Button color="default" outline size="lg" type="button">
                        Learn More
                    </Button>
                    <Button color="default" size="lg" type="button">
                        Become a Partner
                    </Button>
                    </div>

                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-info mt-6 pt-6 pb-6">
            <Container className="pt-lg">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h1 className="display-2 text-white">Build something</h1>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-default" />
                  </div>
                  <h3 className="text-white mt-3">Building tools</h3>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-default" />
                  </div>
                  <h3 className="text-white mt-3">Grow your market</h3>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-default" />
                  </div>
                  <h3 className="text-white mt-3">Launch time</h3>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
      </div>
      <AuthFooter />
    </>
    );
  }
}

export default Landing;
