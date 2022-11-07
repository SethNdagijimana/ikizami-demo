import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import { AiFillLinkedin, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div>

    <div className='footer'>
    <footer className='footer-container'>
        <div className='left-footer'>
            <ul className='guide'>
            <Link to='/home'><li>Ubufasha</li></Link>
            <Link to='/'><li>Amategeko N'amabwiriza</li></Link>
            <Link to='/about'><li>Ibituranga</li></Link>            
            </ul>
        
        </div>
        <div className="right-footer">
        <ul className='social-media'>
        <p>Tuvugishe</p>
        <Link to='/'><li><AiFillLinkedin /></li></Link>
        <Link to='/'><li><AiFillYoutube /></li></Link>
        <Link to='/'><li><AiOutlineTwitter /></li></Link>
        <Link to='/'><li><AiOutlineInstagram /></li></Link>

        </ul>
        
        </div>
    
    </footer>
    
    </div>
    
    </div>
  )
}

export default Footer
