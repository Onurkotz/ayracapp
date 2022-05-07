import "./App.css";
import Header from "./components/mainList/header/Header";
import Home from "./components/mainList/home/Home"
import About from "./components/aboutList/aboutHome/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/think/:id" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// 
