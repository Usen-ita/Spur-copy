import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Text from "../../Components/Text/Text";
import img from "./Img/about.png";
import img2 from "./Img/about2.png";
import { THEME } from "../../const";
import "./About.css";
export default function About() {
  return (
    <Container className="pt-5 mt-5" id="about">
      <Row className="pt-5 mt-5 p pb-5">
        <Col lg={6} className="">
          <img src={img} style={{ maxWidth: "90%" }} />
        </Col>
        <Col lg={6} id="about">
          <Text
            className="pt-3"
            color={THEME.SECONDARY}
            small
            bold
            text="Spur"
          />
          <p
            className="responsiveAboutText"
            style={{
              fontSize: "45px",
              fontFamily: "AvertaStd-ExtraBold",
              lineHeight: "55px",
            }}
          >
            Spur aims to help people explore different communities by helping
            them become more well rounded citizens
          </p>
          <Text
            regular
            text={
              <>
                Our idea is a social media app that brings together all the 17
                sustainable developing goals by letting people upload and or/
                view posts about said goals. This can go into detail about each
                individual goal and solve current existing problems in the
                world.
              </>
            }
          />
        </Col>
      </Row>
      <div className="pt-5 mt-5 pb-3 text-center">
        <Text
          className="respTextGoals"
          h3
          extraBold
          text="WHAT ARE THE SUSTAINEABLE DEVELOPMENT GOALS?"
        />
      </div>
      <Row>
        <Col lg={6}>
          <Text
            regular
            text={
              <>
                in 2015, United Nations created the 2030 Agenda for sustainable
                development which calls on all nations to work in partnership to
                address some of the world's most pressing
                isssuesincluding,poverty,hunger and climate change.At the heart
                of the Agenda lies 17 Sustainable Development Goals(SDGS) Which
                promote prosperity while protecting the planet.The SDGS
                recognize that ending poverty must go hand-in-hand with economic
                and social growth while tackling climate change.
              </>
            }
          />
        </Col>
        <Col lg={6} className="">
          <img src={img2} style={{ maxWidth: "90%" }} />
        </Col>
      </Row>
    </Container>
  );
}
