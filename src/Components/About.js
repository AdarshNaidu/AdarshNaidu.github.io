import React from 'react';
import dp from '../dp.png';

function About(){
    return (
        <section id="about">
          <div className="container flex">
      
            <div className="header waypoint" data-animation="slide-in-left">ABOUT</div>
            <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
      
            <div className="flex row label-wrap">
              <div className="flex row-gt-sm">
                <div className="flex bullet-wrap ">
                  <div className="hex-wrap waypoint" data-animation="flip-in-x">
                    <div className="hexagon">
                      <i className="mdi mdi-home-variant"></i>
                    </div>
                  </div>
                  <div className="waypoint" data-animation="fade-in">
                    <div className="label bold">Background</div>
                    <div>Natively from Kolar, brought up in MP. Spent most of teenage in Bengaluru</div>
                  </div>
                </div>
      
          
                <div className="flex bullet-wrap ">
                  <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".4s">
                    <div className="hexagon">
                      <i className="mdi mdi-bike"></i>
                    </div>
                  </div>
                  <div className="waypoint" data-animation="fade-in" data-delay=".4s">
                    <div className="label bold">Interests</div>
                    <div>Video Editing, Cinematography and watching Anime :)</div>
                  </div>
                </div>
              </div>
      
            <div class="flex row-gt-sm">
              <div className="flex bullet-wrap ">
                <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".2s">
                  <div className="hexagon">
                    <i className="mdi mdi-school"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in" data-delay=".2s">
                  <div className="label bold">College</div>
                  <div>Sophomore student studying Information Technology. NITK Surathkal</div>
                </div>
              </div>
            
              
      
              <div className="flex bullet-wrap ">
                <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".6s">
                  <div className="hexagon">
                    <i className="mdi mdi-account-multiple-plus"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in" data-delay=".6s">
                  <div className="label bold">Clubs</div>
                  <div>ACM NITK. Web Enthusiasts' Club NITK. MACD NITK</div>
                </div>
              </div>
            </div>
          </div>
      
            <div className="skills-wrapper flex row-gt-sm">
              <div className="flex flex-50-gt-sm waypoint" data-animation="slide-in-left" style={{ alignSelf: "center" }}>
                <img src={ dp } className="me"></img>
                <div className="label">Let me tell you my favorite Quote!</div>
                <div className="label bold" style={{lineHeight: "120%"}}>“In a conflict between the heart and the brain, follow your heart.”</div>
                <div>Swami Vivekananda</div>
              </div>
      
              <div className="flex flex-50-gt-sm waypoint bars-wrap" data-animation="slide-in-right">
                <div className="bar flex">
                  <div className="bar fill" style={{width:85 + '%'}}>
                    <div className="tag bold flex">HTML</div>
                  </div>
                  <span>85%</span>
                </div>
      
                <div className="bar flex">
                  <div className="bar fill" style={{width: 80 +'%'}}>
                    <div className="tag bold flex">CSS</div>
                  </div>
                  <span>80%</span>
                </div>
      
      
                <div className="bar flex">
                  <div className="bar fill" style={{width:60+'%'}}>
                    <div className="tag bold flex">JavaScript</div>
                  </div>
                  <span>60%</span>
                </div>
      
                <div className="bar flex">
                  <div className="bar fill" style={{width:50 +'%'}}>
                    <div className="tag bold flex">Node.js</div>
                  </div>
                  <span>50%</span>
                </div>

                <div className="bar flex">
                  <div className="bar fill" style={{width:40+'%'}}>
                    <div className="tag bold flex">React</div>
                  </div>
                  <span>40%</span>
                </div>
      
                <div className="bar flex">
                  <div className="bar fill" style={{width:40+'%'}}>
                    <div className="tag bold flex">Angular</div>
                  </div>
                  <span>40%</span>
                </div>
      
                
      
                <div className="bar flex">
                  <div className="bar fill" style={{width:70+'%'}}>
                    <div className="tag bold flex">C++</div>
                  </div>
                  <span>70%</span>
                </div>
      
               
      
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;