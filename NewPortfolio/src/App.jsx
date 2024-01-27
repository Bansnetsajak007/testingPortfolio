// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/About';
import Projects from './components/Projects';
import NavComponent from './components/NavComponent';

const App = () => {
  return (
    <Router>
      <div style={{ height: '100vh', overflow: 'hidden' }}> {/* Ensure the entire page doesn't scroll */}
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
