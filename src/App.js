import React from "react";
import "./App.css";
import Header from "./components/mainList/header/Header";
import Home from "./components/mainList/home/Home";
import About from "./components/aboutList/aboutHome/about/About";
import Goal from "./components/goal/home/Goal";
import Modes from "./components/modes/homeModes/HomeMode";
import Footer from "./components/footer/Footers";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Upps.</h1>;
    }

    return this.props.children; 
  }
}

function App() {

  
  const dark = useSelector((state) => state.dark.checked);

  return (
    <ErrorBoundary> 
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
    </ErrorBoundary>
  );
}

export default App;
