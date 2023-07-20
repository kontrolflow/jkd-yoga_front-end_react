import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Imports
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Instructors from './pages/Instructors';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/curriculum" element={<Curriculum />}/>
        <Route path="/instructors" element={<Instructors />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
