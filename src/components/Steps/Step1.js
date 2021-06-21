import React from 'react';
import cert from '../../assets/certs/linewize.cacert.crt';
// import MAXcert from '../../assets/certs/linewize.cacert.zip';
import MAXcert from '../../assets/certs/linewize.cert.zip';

import StyleWhite from '../../Styles/StyleWhite';

import winApp from '../../assets/apps/Mobile Zone Installer.msi';
import macApp from '../../assets/apps/Mobile Zone Installer.pkg';

import napWin from '../../assets/apps/NAP Locked down browser.msi';
import napMac from '../../assets/apps/NAP Locked down browser.dmg';

const Step1 = (props) => {
  const getBrowser = () => {
    var geckobrowsers;
    var browser = "";
    var browserVersion = 0;
    var agent = navigator.userAgent + " ";
    if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "5.0" && agent.indexOf("like Gecko") !== -1){
        geckobrowsers = agent.substring(agent.indexOf("like Gecko")+10).substring(agent.substring(agent.indexOf("like Gecko")+10).indexOf(") ")+2).replace("LG Browser", "LGBrowser").replace("360SE", "360SE/");
        for(var i = 0; i < 1; i++){
            geckobrowsers = geckobrowsers.replace(geckobrowsers.substring(geckobrowsers.indexOf("("), geckobrowsers.indexOf(")")+1), "");
        }
        geckobrowsers = geckobrowsers.split(" ");
        for(var ii = 0; ii < geckobrowsers.length; ii++){
            if(geckobrowsers[ii].indexOf("/") === -1)geckobrowsers[ii] = "Chrome";
            // console.log(geckobrowsers[ii])
            if(geckobrowsers[ii].indexOf("/") !== -1)geckobrowsers[ii] = geckobrowsers[ii].substring(0, geckobrowsers[ii].indexOf("/"));
        }
        if(geckobrowsers.length < 4){
            browser = geckobrowsers[0];
        } else {
            for(var iii = 0; iii < geckobrowsers.length; iii++){
                if(geckobrowsers[iii].indexOf("Chrome") === -1 && geckobrowsers[iii].indexOf("Safari") === -1 && geckobrowsers[iii].indexOf("Mobile") === -1 && geckobrowsers[iii].indexOf("Version") === -1)browser = geckobrowsers[iii];
            }
        }
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "5.0" && agent.indexOf("Gecko/") !== -1){
        browser = agent.substring(agent.substring(agent.indexOf("Gecko/")+6).indexOf(" ") + agent.indexOf("Gecko/")+6).substring(0, agent.substring(agent.substring(agent.indexOf("Gecko/")+6).indexOf(" ") + agent.indexOf("Gecko/")+6).indexOf("/"));
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "5.0" && agent.indexOf("Clecko/") !== -1){
        browser = agent.substring(agent.substring(agent.indexOf("Clecko/")+7).indexOf(" ") + agent.indexOf("Clecko/")+7).substring(0, agent.substring(agent.substring(agent.indexOf("Clecko/")+7).indexOf(" ") + agent.indexOf("Clecko/")+7).indexOf("/"));
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "5.0"){
        browser = agent.substring(agent.indexOf("(")+1, agent.indexOf(";"));
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "4.0" && agent.indexOf(")")+1 === agent.length-1){
        browser = agent.substring(agent.indexOf("(")+1, agent.indexOf(")")).split("; ")[agent.substring(agent.indexOf("(")+1, agent.indexOf(")")).split("; ").length-1];
    } else if(agent.substring(agent.indexOf("Mozilla/")+8, agent.indexOf(" ")) === "4.0" && agent.indexOf(")")+1 !== agent.length-1){
        if(agent.substring(agent.indexOf(") ")+2).indexOf("/") !== -1)browser = agent.substring(agent.indexOf(") ")+2, agent.indexOf(") ")+2+agent.substring(agent.indexOf(") ")+2).indexOf("/"));
        if(agent.substring(agent.indexOf(") ")+2).indexOf("/") === -1)browser = agent.substring(agent.indexOf(") ")+2, agent.indexOf(") ")+2+agent.substring(agent.indexOf(") ")+2).indexOf(" "));
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else if(agent.substring(0, 6) === "Opera/"){
        browser = "Opera";
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
        if(agent.substring(agent.indexOf("(")+1).indexOf(";") !== -1)browser = agent.substring(agent.indexOf("(")+1, agent.indexOf("(")+1+agent.substring(agent.indexOf("(")+1).indexOf(";"));
        if(agent.substring(agent.indexOf("(")+1).indexOf(";") === -1)browser = agent.substring(agent.indexOf("(")+1, agent.indexOf("(")+1+agent.substring(agent.indexOf("(")+1).indexOf(")"));
    } else if(agent.substring(0, agent.indexOf("/")) !== "Mozilla" && agent.substring(0, agent.indexOf("/")) !== "Opera"){
        browser = agent.substring(0, agent.indexOf("/"));
        browserVersion = agent.substring(agent.indexOf(browser)+browser.length+1, agent.indexOf(browser)+browser.length+1+agent.substring(agent.indexOf(browser)+browser.length+1).indexOf(" "));
    } else {
        browser = agent;
    }

    return (browser + " v" + browserVersion);
  }
//   console.log(parseInt(window.navigator.appVersion.split("NT")[1].split(";")[0].trim()))
  var OS = props.os === 0 ? "Windows " + parseInt(window.navigator.appVersion.split("NT")[1].split(";")[0].trim()) : "MacOS";
  return (
        <div className="position-relative section grey-bg" id="buttons">
          <div className="container text-center">
            <div className="section-title">
                  <h2>Downloads</h2>
              </div>
              <div className="section pt-0">
                  <p data-aos="flip-right">Before we begin on this installation we need to first download the certificate, Click the button below to begin your download.</p>
                  <hr />
                  <a href={props.os === 0 ? cert : MAXcert} className="btn btn-outline-primary btn-cert px-5 mt-3 mt-xl-3 mr-xl-3"onClick={props.download} target="_blank" download={true} rel="noopener noreferrer">Download Certificate ({OS})</a>
                  <a href={props.os === 0 ? winApp : macApp} className="btn btn-outline-primary btn-cert px-5 mt-3 mt-xl-3">Download App ({OS})</a>
                  <div className="text-center">
                  <a href={props.os === 0 ? napWin : napMac} className="btn btn-outline-primary btn-cert px-5 my-3 my-xl-5 mr-xl-3">Download NAPLAN Browser ({OS})</a>
                  </div>
                  <hr />
                  <p className="mt-3" data-aos="flip-left"><i>We have detected your system is running {OS}, if this is incorrect please see the IT guy for further assistance</i></p>                  
                  <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Operating System</th>
                      <th scope="col">Browser</th>
                      <th scope="col">Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{OS}</td>
                      <td>{getBrowser()}</td>
                      <td>{window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio}</td>
                    </tr>
                  </tbody>
                  </table>
                  {/* <p>Your IP is {props.ip} with a resolution of {props.res}</p> */}
              </div>
            </div>
            <StyleWhite />
        </div>
  );
}

export default Step1;