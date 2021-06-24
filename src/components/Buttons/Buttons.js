import React from 'react';
import './buttons.css';
import * as Scroll from "react-scroll";
// import Particles from 'react-particles-js';

// import StyleWhite from '../../Styles/StyleWhite';
import StyleGrey from '../../Styles/StyleGrey';

const Links = Scroll.Link;
const Buttons = (props) => {
  return (
      <div className="position-relative">
        <div className="btn_title overlays">
            <div className="z-index text-center text-white">
              <h1  data-aos="fade-in" data-aos-duration={500} data-aos-delay={200}>Horizon Christian School</h1>
              <h4  data-aos="fade-in" data-aos-duration={500} data-aos-delay={400}>Certificate Portal</h4>
              <div className="mt-5">
                  <Links
                      to="gettingstrarted"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    ><div className="arrow bounce"></div></Links>
              </div>

            </div>
            <div className="z-index">
            
              <StyleGrey trans={true} />
            </div>
          </div>
          {/* <div style={{zIndex: 1033, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
                </div> */}
        
        </div>
  );
}

export default Buttons;