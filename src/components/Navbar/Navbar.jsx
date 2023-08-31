// import React from "react";
// import { ReactSVG } from "react-svg";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import conecta from "../../assets/conecta-logo.svg";

import './Navbar.css';


const Navbar = () => {
  return (
    <>
      <div className="navbar-container">

        <div className="conecta-logo">
          <img src={conecta} alt="conecta logo" />
        </div>

        <div className="social-media">
          <GrFacebook size={18} />
          <BsInstagram size={18}/>
        </div>
        
      </div>
    </>
  )
}

export default Navbar;