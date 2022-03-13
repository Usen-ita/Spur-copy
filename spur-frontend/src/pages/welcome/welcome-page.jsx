import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";

function WelcomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Contact />
    </div>
  );
}

export default WelcomePage;
