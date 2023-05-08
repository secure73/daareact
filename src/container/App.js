
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';   

import './App.css';
import MainRouter from './MainRouter';
function App() {
  return (
    <div>
      <Router>
        <MainRouter/>
      </Router>

    </div>
  );
}

export default App;
