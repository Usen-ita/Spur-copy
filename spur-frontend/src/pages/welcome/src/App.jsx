import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Contact />
    </>
  );
}

export default App;
