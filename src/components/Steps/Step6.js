import React from 'react';
import StyleWhite from '../../Styles/StyleWhite';

import s7 from '../../assets/images/step9.1.png';
import s8 from '../../assets/images/step9.2.png';

const Step3 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
      <div>
      {props.os === 0 ?
        <div className="position-relative section grey-bg" id="s6">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Step #6</h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-6 mb-4">
                    <p data-aos="zoom-in-up" >Now your certificate is installed on your system, Click OK</p>
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s7} data-caption="Step #7" onClick={_handleClick}><img src={s7} alt={s7} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >The installation is complete, you can close the certificate by clicking the OK button seen in the image below</p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s8} data-caption="Step #8" onClick={_handleClick}><img src={s8} alt={s8} className="img-fluid mb-2"/></a>
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