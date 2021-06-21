import React from 'react';
import './header.css';

const PanelTop = (props) => {
  
  return (
        <div id="home">
           <div className="bg-dark text-white d-flex align-items-center" style={{height: 40, width: "100%"}}>
            <div className="container">
              
              <div className="float-left position-relative" data-aos="flip-left" data-aos-duration={3000} data-aos-delay={500}><span>Horizon Christian School Certificate Portal</span></div>
              <div className="float-right d-none d-md-block">
                <span>E: </span><a style={{textDecorationStyle: "none", color: "#fff"}} href="mailto:support@horizon.sa.edu.au?subject=Application | Problem with installing certificate&body=Hi Brad, can i get some help in room ?? installing family zones certificate please." >support@horizon.sa.edu.au</a>
              </div>
            </div>
          </div>
        </div>
  );
}

export default PanelTop;