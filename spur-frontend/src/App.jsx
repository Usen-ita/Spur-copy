import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import SdgOption from "./pages/17sdg/sdgOption";
import WelcomePage from "./pages/welcome/welcome-page.jsx";
import context from "react-bootstrap/esm/AccordionContext";
import { AuthContext } from "./context/AuthContext.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route exact path="/" element={user ? <Home /> : <Register />} />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
            <Route exact path="/welcome" element={<WelcomePage />} />

        <Route path="/sdgOptions" element={<SdgOption />} />
        <Route path="/profile/:username" element={<Profile />} />
       
      </Routes>
    </Router>
  );
}

export default App;
