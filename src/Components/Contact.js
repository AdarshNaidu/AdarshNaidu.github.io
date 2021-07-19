import React from 'react';

function Contact(){
    return(
        <section id="contact">
          <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
            <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"/>
          </svg>
          <div className="container flex">
            <div className="header waypoint" data-animation="slide-in-left">CONTACT</div>
            <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".25s"></div>
          
          </div>

          <div className="icon-wrap flex row waypoint" data-animation="slide-in-left">
            <a href="https://www.linkedin.com/in/AdarshNaidu/" target="_blank">
              <div className="flex icon" id="icon-2">
                <i className="mdi mdi-linkedin"></i>
              </div>
            </a>
            <a href="https://github.com/AdarshNaidu" target="_blank" >
              <div className="flex icon" id="icon-3">
                <i className="mdi mdi-github-circle"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/naidu.adarsh2511/" target="_blank">
              <div className="flex icon" id="icon-4">
                <i className="mdi mdi-instagram"></i>
              </div>
            </a>
            <a href="https://www.youtube.com/channel/UCsXnSFVbQ63bTSYdMhW4QJA" target="_blank">
              <div className="flex icon" id="icon-5">
                <i className="mdi mdi-youtube-play"></i>
              </div>
            </a>
            <a href="mailto:naidu.adarsh2511@gmail.com" target="_blank">
              <div className="flex icon" id="icon-6">
                <i className="mdi mdi-mail-ru"></i>
              </div>
            </a>
          </div>
      
        
        </section>
    );
}

export default Contact;