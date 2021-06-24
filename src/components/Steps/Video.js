import React from 'react';
import StyleGrey from '../../Styles/StyleGrey';
import YouTube from 'react-youtube';

// import thumb1 from '../../assets/images/win_vid_thumb.png';
// import thumb2 from '../../assets/images/mac_vid_thumb.png';

// const VID1 = "/assets/videos/Vid1.mp4";
// const VID2 = "/assets/videos/Vid2.mp4";

class Video extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            expand: 'col-md-5',
            expand2: 'col-md-6',
            text: 'Enlarge Video'
        }
    }
    
    _onReady = (event) => {
        event.target.pauseVideo();
      }
    toggleExpand = () => {
        if(!this.state.toggle) {
            this.setState({
                toggle: true,
                expand: 'col-md-10',
                expand2: 'col-md-8',
                text: 'Shrink Video'
            });
        } else {
            this.setState({
                toggle: false,
                expand: 'col-md-5',
                expand2: 'col-md-6',
                text: 'Enlarge Video'
            });            
        }
    }

    render() {
        const opts = {
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
        return (
            <div className="position-relative section white-bg">
                <div className="container text-center">
                    <div className="section-title">
                        <h2>Video Tutorial</h2>
                    </div>
                    <div className="section pt-0">
                        <div className="row align-items-center justify-content-around">
                            <div className={`${this.state.expand} col-12 mb-sm-5`}>
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-outline-primary btn-expand px-5 my-3 my-xl-5" onClick={this.toggleExpand}>{this.state.text}</button>
                                    {/* <button className="btn btn-outline-primary btn-expand px-5 my-3 my-xl-5" onClick={this.handleFullScreen}>Fullscreen</button> */}
                                </div>
                                
                                <div className="img-border-invert border-image">
                                    <YouTube videoId="EUyyxOuUQuM" opts={opts} onReady={this._onReady} className="w-100"/>  
                                </div>                                
                            </div>
                            <div className={`${this.state.expand2} col-12`}>
                                <div className="text-right">
                                    <h2 className="main-text-color font-35 mb-0">Installing</h2>
                                    <h2 className="second-text-color font-35 font-weight-bold">FamilyZones 
                                        <span className="main-text-color"> Certificate</span>
                                    </h2>
                                </div>
                                <p className="pb-2 text-left">
                                    Welcome to Horizon Certificate Portal, Watch the video and follow the steps involved to install the family zones certificate. <br />
                                    If you dont wish to watch the video, you can follow the steps below for the installation process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <StyleGrey />
            </div>
        );
    }
}

export default Video;