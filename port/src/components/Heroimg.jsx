import "./Heroimg.css";
import React from 'react';
import { Link } from "react-router-dom";
import Introimg from "../assets/introimg.jpg"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="introimg" src={Introimg} alt="Introimg"/>
      </div>

      <div className="content">
        <p>Hi, I'm Umesh!!!</p>
        <h1>Full Stack Developer</h1>

        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
