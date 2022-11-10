import React from 'react';
import "./signup.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup">
    <div className='signup-container'>
   
     <h1>iyandikishe</h1>
      
     <form className="signup_details">
     <div class="form-element">
     <label class="form-element--lable" for="username_input">Amazina Yombi</label>
     <input class="form-element--input"  type="text" name="username" required />
     </div>
     <div class="form-element">
     <label class="form-element--lable" for="useremail_input">Imeri</label>
     <input class="form-element--input"  type="email" name="email" required />
     </div>
     <div class="form-element">
     <label class="form-element--lable" for="username_input">Izina Ukoresha</label>
     <input class="form-element--input"  type="text" name="username" required />
     </div>
     <div class="form-element">
     <label class="form-element--lable" for="usernumber_input">Numero ya Telefone</label>
     <input class="form-element--input"  type="number" name="number" required />
     </div>
     <div class="form-element">
     <label class="form-element--lable" for="Address_input">Aderesi</label>
     <input class="form-element--input"  type="address" name="address" required />
     </div>
     <div class="form-element">
          <label class="form-element--lable" for="password_input">Ijambo Ry'Ibanga</label>
         <input id="password_input" class="form-element--input"  type="password" name="password" required />    
     </div>
     <div class="form-element">
     <label class="form-element--lable" for="password_input">Emeza Ijambo Ry'Ibanga</label>
     <input id="password_input" class="form-element--input"  type="password" name="password" required /> 
      <Link to="/confirm"><button type="submit" className="signup-btn">iyandikishe</button></Link>
     
     </div>
     
     
     
     </form>
     
    </div>

    <Footer />
  </div>
  )
}

export default Signup
