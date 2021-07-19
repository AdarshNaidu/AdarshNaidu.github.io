import React from 'react';
import '../css/canvas.css';

function  Canvas() {
    return(
        <section id="home" className="flex height-fix">
      
          <canvas id = "one"></canvas>
          <div id = "name" className = "anim-text"></div>
        
          <div className="flex">
            <nav className="flex">
              <div className="link-wrap">
                <div className="page-link" dest="home">home</div>
                <div className="page-link" dest="about">about</div>
                <div className="page-link" dest="portfolio">portfolio</div>
                <div className="page-link" dest="contact">contact</div>
              </div>
              <i className="mdi mdi-menu"></i>
            </nav>
          </div>
      
        </section>
    );
}

export default Canvas;

// <div className="page-link" dest="blog">blog</div>
