import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Resume from './components/resume/Resume';

function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Resume />
      </div>
    </Router>
  );
}


export default App;
