import React from 'react';

import Buttons from '../components/Buttons/Buttons';

import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';
import Step4 from '../components/Steps/Step4';
import Step5 from '../components/Steps/Step5';
import Step6 from '../components/Steps/Step6';
import Finish from '../components/Steps/FINISH';
import Video from '../components/Steps/Video';

// import Fun from '../components/Fun/Fun';

const Main = (props) => {
    
    return (
        <div>
            <Buttons os={props.os} />
            
            <div id="gettingstrarted">
                <div>
                    <Step1 os={props.os} download={props.download}/>
                    {props.os === 0 ?
                    <Video os={props.os} fancy={props.fancy} />
                    :
                    null }                    
                    <Step2 os={props.os} fancy={props.fancy} />
                    <Step3 os={props.os} fancy={props.fancy} />
                    <Step4 os={props.os} fancy={props.fancy} />
                    <Step5 os={props.os} fancy={props.fancy} />
                    <Step6 os={props.os} fancy={props.fancy} />
                    <Finish fancy={props.fancy} toggleFun={props.toggleFun} />
                </div>
            </div>
            {/* <Fun show={props.show} /> */}
        </div>
    );
}

export default Main;