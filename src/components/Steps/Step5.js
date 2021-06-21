import React from 'react';
import StyleGrey from '../../Styles/StyleGrey';

import s7 from '../../assets/images/step7.png';
import s8 from '../../assets/images/step8.png';

const Step3 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
      <div>
      {props.os === 0 ?
        <div className="position-relative section white-bg" id="s5">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Step #5</h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-6 mb-4">
                    <p data-aos="zoom-in-up" >Make sure it says <b>Trusted Root Certification Authorities</b> and click Next</p>
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s7} data-caption="Step #7" onClick={_handleClick}><img src={s7} alt={s7} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >Now click finish to install the Certificate</p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s8} data-caption="Step #8" onClick={_handleClick}><img src={s8} alt={s8} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>
                </div>
            </div>
            <StyleGrey />
        </div>
        :null}
        </div>
  );
}

export default Step3;