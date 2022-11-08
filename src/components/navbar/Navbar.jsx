import React, {useState} from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function Navbar() {

    const [Mobile, setMobile] = useState(false)

  return (
    <div>
        <nav className='navbar'>
        <div className='container'>
        <h3 className='logo'>Logo</h3>
        
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/'><li>Ubufasha</li></Link>
        <Link to='/about'><li>Ibituranga</li></Link>
        <Link to='/skills'><li>Amasomo</li></Link>
        <Link to='/signup'><li>Iyandikishe</li></Link>
        <Link to='/signin'><li>Kwinjira</li></Link>
        <Link to='/contact'><li>Indimi</li></Link>

        
        
        </ul>
        <button id="button" className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <AiOutlineBars /> }
        </button>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
