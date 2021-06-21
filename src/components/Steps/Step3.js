import React from 'react';
import StyleGrey from '../../Styles/StyleGrey';

import s3 from '../../assets/images/step3.png';
import s4 from '../../assets/images/step4.png';

import Ms3 from '../../assets/images/MAC_step3.png';
import * as Scroll from "react-scroll";
const Links = Scroll.Link;

const Step3 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
        <div className="position-relative section white-bg" id="s3">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Step #3</h2>
                </div>
                {props.os === 0 ?
                <div className="row d-flex align-items-center justify-content-center mb-5">
                    <div className="col-12 col-md-6 mb-4">
                    <p data-aos="zoom-in-up" >Now that we have the Certificate opened, its time to run through the install process. Click the <b>Install Certificate</b> Button and follow the prompts</p>
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s3} data-caption="Step #3" onClick={_handleClick}><img src={s3} alt={s3} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >Select <b>Local Machine</b> and click Next, If prompted click <b>Yes</b></p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s4} data-caption="Step #4" onClick={_handleClick}><img src={s4} alt={s4} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>
                </div>
                :
                <div className="row d-flex align-items-center justify-content-center mb-5">
                    <div className="col-12 mb-4">
                    <p data-aos="zoom-in-up" >Congratulations the certificate has been installed and time scroll down to <b>Installation Complete</b> section at bottom of page.</p>
                    <Links
                      to="finish"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="btn btn-outline-primary btn-rounded px-5 mb-4"
                      data-aos="zoom-in-up" 
                    >Jump to Complete Section</Links>
                    <div>
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={Ms3} data-caption="Step #3" onClick={_handleClick}><img src={Ms3} alt={Ms3} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>
                    </div>
                </div>
                }
            </div>
            <StyleGrey />
        </div>
  );
}

export default Step3;