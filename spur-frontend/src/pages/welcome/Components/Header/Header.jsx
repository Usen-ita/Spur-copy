import React, { useState, useEffect, useContext } from "react";
import { Nav, Navbar, Container, Row, Dropdown } from "react-bootstrap";
import "./Header.css";
import logo from "./Img/logo.png";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Button from "../Button/Button";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  let menu = [
    {
      title: <>Home</>,
      id: "#home",
    },
    {
      title: <>About</>,
      id: "#about",
    },
    {
      title: <>Contact Us</>,
      id: "#contact",
    },
  ];
  const [headerColor, setHeaderColor] = useState(false);

  const changebackground = () => {
    window.scrollY > 0 ? setHeaderColor(true) : setHeaderColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changebackground);
  });

  return (
    <Navbar
      expand="lg"
      sticky="top"
      fixed="top"
      className={headerColor ? "changeheader shadow" : "defaultheader "}
    >
      <Container className="respnavbr">
        <Col xl={2} lg={2} md={3} sm={5} xs={5} id="zLogo">
          <Navbar.Brand href="#">
            {" "}
            <Image src={logo} className="logo"></Image>
          </Navbar.Brand>
        </Col>
        <Col xl={8} lg={8} md={7} sm={4} xs={3}>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Hamburger color="white" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto my-lg-0  ">
              {menu.map(({ title, id }) => {
                return (
                  <Nav.Link
                    href={id}
                    className="pl-6 ml-5"
                    style={{
                      fontFamily: "AvertaStd-Bold",
                    }}
                  >
                    <p
                      className="link"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "20px",
                      }}
                    >
                      {title}
                    </p>
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col xl={2} lg={2} md={2} sm={3} xs={4}>
          <Button small text="Login" onClick={() => navigate("/login")} />
        </Col>
      </Container>
    </Navbar>
  );
}
export default Header;
