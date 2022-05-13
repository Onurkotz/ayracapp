import "./App.css";
import Header from "./components/mainList/header/Header";
import Home from "./components/mainList/home/Home";
import About from "./components/aboutList/aboutHome/about/About";
import Goal from "./components/goal/home/Goal";
import Modes from "./components/modes/homeModes/HomeMode";
import Footer from "./components/footer/Footers";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dark = useSelector((state) => state.dark.checked);

  return (
    <div className={dark === false ? "" : "darkMode"}>
      <Modes />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/think/:id" element={<About />} />
          <Route path="/myGoals" element={<Goal />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
