import React from 'react';
import '../css/style.css';
import '../css/materialdesignicons.min.css'
import Canvas from './Canvas.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Parallax from './Parallax.js';

function Assemble() {

  return (
    <div className="overflow-wrap">

    
      <Canvas></Canvas>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
      <Parallax></Parallax>
    
      
    </div> 
  );
}

export default Assemble;
