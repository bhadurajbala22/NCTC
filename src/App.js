import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TransportForm from "./pages/nctc_form"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/nctc_form">NCTC Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/nctc_form" element={<TransportForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

