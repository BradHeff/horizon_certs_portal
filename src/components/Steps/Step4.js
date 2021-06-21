import React from 'react';
import StyleWhite from '../../Styles/StyleWhite';

import s5 from '../../assets/images/step5.png';
import s6 from '../../assets/images/step6.png';

const Step3 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
      <div>
    {props.os === 0 ?
        <div className="position-relative section grey-bg" id="s4">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Step #4</h2>
                </div>
                
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-6 mb-4">
                    <p data-aos="zoom-in-up" >Make sure the Second option is selected as you can see in the image below. then click <b>Browse</b></p>
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s5} data-caption="Step #5" onClick={_handleClick}><img src={s5} alt={s5} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>
                
                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >On the small window that shows, make sure <b>Trusted Root Certification Authorities</b> is selected and click <b>OK</b></p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s6} data-caption="Step #6" onClick={_handleClick}><img src={s6} alt={s6} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>

                </div>
                
            </div>
            <StyleWhite />
        </div>
    :null}
    </div>
  );
}

export default Step3;