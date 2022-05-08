import "./App.css";
import Header from "./components/mainList/header/Header";
import Home from "./components/mainList/home/Home"
import About from "./components/aboutList/aboutHome/about/About";
import Goal from "./components/goal/home/Goal"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/think/:id" element={<About />} />
          <Route path="/myGoals" element={<Goal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// 
