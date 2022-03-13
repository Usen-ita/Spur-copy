import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import Text from "../../Components/Text/Text";

import { THEME } from "../../const";

import graphic from "./Img/graphic.png";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  let navigate = useNavigate();
  return (
    // <>
    //   <section
    //     id="home"
    //     className="responsiveBanner"
    //     style={{
    //       // height: "110vh",
    //       backgroundColor: "#4B6973",
    //       // paddingTop: "18vw",
    //       // paddingBottom: "8vw",
    //       // paddingTop: "35vh",
    //       // paddingBottom: "15vh",
    //     }}>
    <Container
      id="home"
      className="responsiveBanner"
      style={{
        backgroundColor: "#4B6973",
      }}
    >
      <Row>
        <Col lg={6}>
          <Text color={THEME.WHITE} small bold text="Social Media App" />
          <p
            className="responsiveBannerText"
            style={{
              fontSize: "45px",
              fontFamily: "AvertaStd-ExtraBold",
              lineHeight: "55px",
              color: "white",
            }}
          >
            An opportunity to be the change you want to see in the world
          </p>
          <Text
            color={THEME.WHITE}
            small
            bold
            text="We spread awareness about the SGDs. Our team of unique specialist are making a world better place."
          />
          <div className="pt-4">
            <Button
              primaryBtn
              text="Get Started"
              onClick={() => navigate("/register")}
            />
          </div>
        </Col>
        <Col lg={6} className="text-end">
          <img src={graphic} style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
    </Container>
    //   </section>
    // </>
  );
}
