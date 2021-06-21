import React from 'react';
import StyleWhite from '../../Styles/StyleWhite';
import s1 from '../../assets/images/step1.png';
import s2 from '../../assets/images/step 2.png';

import Ms1 from '../../assets/images/MAC_step1.png';
import Ms2 from '../../assets/images/MAC_step2.png';

const Step2 = (props) => {
    const _handleClick = e => {
        e.preventDefault();
        props.fancy(e.currentTarget.href, e.currentTarget.dataset["caption"]);
    };
  return (
        <div className="position-relative section grey-bg" id="s2">
            <div className="container text-center">
                <div className="section-title">
                    <h2>Step #2</h2>
                </div>
                {props.os === 0 ?
                <div className="row d-flex align-items-center justify-content-center mb-5">                    
                    <div className="col-12 col-md-6 mb-4">
                    <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s1} data-caption="Step #2" onClick={_handleClick}><img src={s1} alt={s1} className="img-fluid mb-2"/></a>
                        {/* <div className="bottomright">HCS</div>     */}
                    </div>
                        <p data-aos="zoom-in-up" >Uppon downloading you might get the notification below asking what to do with the certificate. This is not harmful to your system so click <b>Keep</b> as indicated in the above image.</p>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >Now that we have the certificate downloaded. Go ahead and click the certificate to open it.</p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={s2} data-caption="Step #2" onClick={_handleClick}><img src={s2} alt={s2} className="img-fluid mb-2"/></a>
                        {/* <div className="bottomright">HCS</div>     */}
                    </div>
                    </div>
                </div>
                :
                <div className="row d-flex align-items-center justify-content-center mt-4">                    
                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >Once the certificate is downloaded, If the certificate does not open automatically then open it from the downloads.</p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={Ms1} data-caption="Step #1" onClick={_handleClick}><img src={Ms1} alt={Ms1} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <p data-aos="zoom-in-up" >After you open the certificate you might be presented with a dialog asking for password. Enter your login password for your computer and click <b>Modify Keychain</b></p>
                        <div className="img-zoom" data-aos="zoom-in-up">
                        <a  href={Ms2} data-caption="Step #2" onClick={_handleClick}><img src={Ms2} alt={Ms2} className="img-fluid mb-2"/></a>
                        <div className="bottomright">HCS</div>    
                    </div>
                    </div>
                </div>
                }
            </div>
            <StyleWhite />
        </div>
  );
}

export default Step2;