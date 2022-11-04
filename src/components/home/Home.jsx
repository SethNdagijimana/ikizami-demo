import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";
import  Reacticon1 from "../../assets/6.svg";
 import  Reacticon2 from "../../assets/5.png";
 import  Reacticon3 from "../../assets/3.png";
 import  Reacticon4 from "../../assets/Vectary texture.png";
 import  Reacticon5 from "../../assets/1.png";
// import Card from './Card';

function Home() {
  return (
    <div className='hero'>
    <section className="left-side">
    <p>Iga Unimenyereze Gukorera<span> Uruhushya Rwagateganyo </span>Rwogutwara Ibinyabiziga</p>
   <Link to='/signup'> <button className='startBtn'>Tangira nonaha</button> </Link>
      </section>

      <section className='right-side'>
      signs
      {
        // <img src={Reacticon1} className="icon1" alt="React 1" />
        //    <img src={Reacticon2} className="icon2" alt="React 2" />
        //    <img src={Reacticon3} className="icon3" alt="React 3" />
        //    <img src={Reacticon5} className="icon5" alt="React 5" />
        //    <img src={Reacticon4} className="icon4" alt="React 4" />
        //    <img src={Reacticon3} className="icon3" alt="React 3" />
        //    <img src={Reacticon5} className="icon5" alt="React 5" />
        //    <img src={Reacticon2} className="icon2" alt="React 2" />
        //    <img src={Reacticon3} className="icon3" alt="React 3" />
           }</section>
    </div>
    
  )
}

export default Home
