import * as React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisez Routes au lieu de Switch

import OpLinkGuide from "./OpLinkGuide";
import "./App.css";
import SorienterPage from './sorienterPage'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* Utilisez Routes pour le routage */}
          <Route path="/" element={<OpLinkGuide />} />
          <Route path="/sorienter" element={<SorienterPage />} /> {/* Utilisez SorienterPage ici */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;