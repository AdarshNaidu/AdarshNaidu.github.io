import React from 'react';
import '../css/loader.css';

function Loader(){
    return(
    <div id="loader">
        <div className="container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
        </div>
    </div>
    );
}

export default Loader;