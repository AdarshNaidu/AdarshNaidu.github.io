import React from 'react';

function Portfolio(){
    return(
        <section className="flex" id="portfolio">
      
          <div className="header waypoint" data-animation="slide-in-right">PROJECTS</div>
          <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".3s"></div>
      
          <div className="filter-wrap waypoint" data-animation="fade-in">
            <div className="flex row">
              <div className="filter" data-filter="all">ALL</div>
              <div className="filter" data-filter=".webdev">Webdev</div>
              <div className="filter" data-filter=".academic">Academic</div>
              <div className="filter" data-filter=".creative">Creative</div>
            </div>
            <div className="float-bar">
              <div className="flex row">
                <div className="filter" data-filter="all">ALL</div>
                <div className="filter" data-filter=".webdev">Webdev</div>
                <div className="filter" data-filter=".academic">Academic</div>
                <div className="filter" data-filter=".creative">Creative</div>
              </div>
            </div>
          </div>
      
          <div id="gallery" className="container flex row wrap waypoint">
            <div className="mix webdev" data-my-order="1">
              <div className="card">
                <h1>Git-Hub Profile</h1>
                <p>View all projects here</p>
                <a href ="https://github.com/AdarshNaidu" target="_blank" className = "button">Know More</a>
              </div>
            </div>
      
            <div className="mix academic" data-my-order="1">
              <div className="card">
                <h1>RFID Attendance</h1>
                <p>C++</p>
                <a href ="https://github.com/AdarshNaidu/imagineer-rfid" target="_blank" className = "button">Know More</a>
              </div>
            </div>
      
            <div className="mix creative" data-my-order="1">
              <div className="card">
                <h1>Jaipur - Vlog</h1>
                <p>Cinematic Video</p>
                <a href ="https://youtu.be/NcTexwBqdfc" target="_blank" className = "button">Know More</a>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Portfolio;