import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/home/Home';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Contact from './components/pages/contact/Contact';
import Signin from './components/pages/signin/Signin';
import Signup from './components/pages/signup/Signup';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar />
      <Routes>
        <Route element = {<Home />} path='/home'/>
        <Route path='/about' element = {<About />} />
        <Route path='/skills' element = {<Skills />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/signin' element = {<Signin />}  />

      </Routes>
    
    </Router>
      
    </div>
  );
}

export default App;
