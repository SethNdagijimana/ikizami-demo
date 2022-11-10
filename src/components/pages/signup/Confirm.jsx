import React from 'react';
import { Link } from 'react-router-dom';
import "./confirm.css";

function Confirm() {
  return (
    <div className="confirm">
    <div className="confirm_container">
    <h1>Iyandikishe</h1>
    <h2>reba imeri yawe cyangwa SMS kode yemeza</h2>
    <form > 
    <div class="form_element">
    <input class="form-element--input"  type="text" name="confirm" required />
    <Link to ="/signin"><button type="submit" class="signup-button">Emeza Hano</button></Link>

    </div>
    </form>
    </div>
    
    </div>
  )
}

export default Confirm
