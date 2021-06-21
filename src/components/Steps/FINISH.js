import React from 'react';

import s9 from '../../assets/images/step9.3.png';

const Step3 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
        <div className="section white-bg" id="finish">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Installation Complete</h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center pb-5">
                    <div className="col-12 mb-4">
                    <p data-aos="zoom-in-up">Check your certificate installation by navigating to <a href="https://google.com">www.google.com</a></p>
                    <div className="img-zoom mt-4" data-aos="zoom-in-up">
                        <a  href={s9} data-caption="Step #9" onClick={_handleClick}><img src={s9} alt={s9} className="img-fluid mb-2"/></a>
                        <div className="bottomright">Horizon Christian School</div>    
                    </div>
                        
                    </div>

                </div>
            </div>
        </div>
  );
}

export default Step3;