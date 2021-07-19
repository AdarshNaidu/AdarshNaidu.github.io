import React from 'react';
import '../css/parallax.css'

function Parallax(){
    return(
        <div className="expwrap">
          <div className= "exp rellax" id="exp1" data-rellax-speed="4"></div>
          <div className= "exp rellax" id="exp2" data-rellax-speed="1"></div>
          <div className= "exp rellax" id="exp3" data-rellax-speed="5"></div>
          <div className= "exp rellax" id="exp4" data-rellax-speed="1"></div>
          <div className= "exp rellax" id="exp5" data-rellax-speed="4"></div>
          <div className= "exp rellax" id="exp6" data-rellax-speed="8"></div>
          <div className= "exp rellax" id="exp7" data-rellax-speed="2"></div>
        </div>
    );
}

export default Parallax;

