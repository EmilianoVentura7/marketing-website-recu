import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/organisms/Nav';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/organisms/Footer';
import './App.css';

const App = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <Router>
      <div className={`App ${modoOscuro ? 'modo-oscuro' : ''}`}>
        <Nav modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
