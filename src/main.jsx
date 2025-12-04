import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="logo-mark">TRYONYOU</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/demo">Demo Runway</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <span>TRYONYOU · ABVETOS · PAU · PIAPCOC · Demo build</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
