
import { Button as Bootstrapbtn, ButtonProps } from "react-bootstrap";
import "./Button.css";

export default function Button({
  text,
  orangeBorder,
  primaryBtn,
  href,
  onClick,
  small,
  ...restofprops
}) {
  return (
    <>
      <Bootstrapbtn
        onClick={onClick}
        href={href}
        style={{
          fontFamily: "AvertaStd-Bold",
          backgroundColor: "#E5EEF1",
          border: "0px",
          fontSize: "18px",
          padding: small ? "7px 30px 7px 30px" : "10px 50px 10px 50px",
          borderRadius: "50px",
          color: "black",
        }}
        {...restofprops}>
        {text}
      </Bootstrapbtn>
    </>
  );
}
