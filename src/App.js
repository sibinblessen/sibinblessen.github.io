import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './components/landing-page/LandingPage';
import Resume from './components/resume/Resume';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>
  );
}


export default App;
