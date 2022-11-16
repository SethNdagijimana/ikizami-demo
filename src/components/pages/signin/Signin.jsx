import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
      <div className="page">
        <div className="cover">
            <h1>Injira</h1>
            <label className="username">Izina ukoresha</label>
            <input type="text" placeholder="username" />
            <label className="password">Umubare W'ibanga</label>
            <input type="password" placeholder="password" />

            <Link to="/adminDashboard"><button type="submit" className="login-btn">Injira</button></Link>
            
        </div>
        </div>
    )
}

export default Signin