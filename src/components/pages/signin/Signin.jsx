import React from "react";
import "./signin.css"

const Signin = () => {
    return (
      <div className="page">
        <div className="cover">
            <h1>Injira</h1>
            <label className="username">Izina ukoresha</label>
            <input type="text" placeholder="username" />
            <label className="password">Umubare W'ibanga</label>
            <input type="password" placeholder="password" />

            <button className="login-btn">Injira</button>
            
        </div>
        </div>
    )
}

export default Signin