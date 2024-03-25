import React from 'react'
import './App.css';
import Portfolio from './Portfolio'
import Share from './Share'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App({changeTheme, darkTheme}) {
  return (
    <Router>
      <Routes>
        <Route path="/prototype" element={<Portfolio />} />
        <Route path="/portfolio" element={<Share/>} />
      </Routes>
    </Router>
  )
}

export default App
