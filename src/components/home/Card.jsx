import React from 'react';
import "./card.css";
import Card1 from "../../assets/man.png";
import Card2 from "../../assets/woman.png";
import { Link } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

function Card() {
  return (
    <div>
    <div className="card">
      <div className="flex-container">
     
     <div className='flex-item-left'>
     <img src={Card1} className="card-1" alt="card-1" />
     
     </div>
     <div className='flex-item-right'>
        <h2>Tugutegurira amasomo yokwigira uruhushya rwagatenganyo</h2>
        <h3>tugutegurira amasomo muburyo busobanutse bukorohereza mumyigire </h3>
          <div className='btns'>
        <Link to='/signup'> <button className='startBtn-2'>Tangira wige</button> </Link>
        <Link to='/signup'> <button className='video'>Reba video</button> </Link>
        </div>

     </div>
      </div>
        <div className='flex-container-2'>
      <div className='flex-item-left'>
     <img src={Card2} className="card-2" alt="card-2" />
     </div>
     <div className='flex-item-right'>
     <h2>Tukumenyereza  gukora ikizamini</h2>
     <h3>Urubuga tugufasha kwimenyereza  no kwisuzuma gukorera ikizamini cyuruhushya rwagateganyo rwo gutwara ibinyabiziga</h3>
       <div className='btns'>
     <Link to='/signup'> <button className='startBtn-2'>Isuzume</button> </Link>
     <Link to='/signup'> <button className='video'>Reba video</button> </Link>
     </div>
     </div>
  </div>
 </div>


 
      <Footer />
    </div>
  )
}

export default Card
