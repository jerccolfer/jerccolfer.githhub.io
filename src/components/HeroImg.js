import "./HeroImgStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

import IntroImg from "../assets/bg-land-test.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Landscape Test"/>
        </div>

        <div className="content">
            <p>My Name is Jeremy Colfer</p>
            <h1>WELCOME TO MY WEBSITE</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
