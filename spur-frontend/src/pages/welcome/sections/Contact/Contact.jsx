import react from "react";
import { Container } from "react-bootstrap";
import Text from "../../Components/Text/Text";
import { THEME } from "../../const";
export default function Contact() {
  return (
    <Container className="pt-5 pb-5 mt-5" id="contact">
      <div className="text-center">
        <Text color={THEME.SECONDARY} h3 bold text="Contact Us" />
        <Text bold text="Email : spurG41@hotmail.com" />
      </div>
    </Container>
  );
}
