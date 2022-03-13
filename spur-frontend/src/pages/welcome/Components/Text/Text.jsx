export default function Text({
  text,
  bold,
  h1,
  h2,
  h3,
  regular,
  small,
  color,
  extraBold,
  className,
}) {
  return (
    <>
      <p
        className={className}
        style={{
          fontFamily: extraBold
            ? "AvertaStd-ExtraBold"
            : bold
            ? "AvertaStd-Bold"
            : "AvertaStd-Regular",
          fontSize: h1
            ? "64px"
            : h2
            ? "45px"
            : h3
            ? "32px"
            : regular
            ? "20px"
            : small
            ? "18px"
            : "24px",
          color,
        }}>
        {text}
      </p>
    </>
  );
}
