import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Danielle from './Components/pages/Danielle';
import Team from './Components/pages/Team';
import Contact from './Components/pages/Contact';
import Footer from './Components/Footer';
import Blog from './Components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/danielle' element={<Danielle />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
