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
import Confirm from './components/pages/signup/Confirm';
import AdminDashboard from './components/dashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar />
      <Routes>
        <Route element = {<Home />} path='/'/>
        <Route path='/about' element = {<About />} />
        <Route path='/skills' element = {<Skills />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/signin' element = {<Signin />}  />
        <Route path='/confirm' element = {<Confirm />}  />
        <Route path='/adminDashboard' element = {<AdminDashboard />}  />



      </Routes>
    
    </Router>
      
    </div>
  );
}

export default App;
