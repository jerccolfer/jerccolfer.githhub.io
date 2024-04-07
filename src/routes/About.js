import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="My name is Jeremy Colfer,
       this website was created as both an example of a project 
       and to display any projects I create."/>
      <Footer/>
    </div>
  )
}

export default About
