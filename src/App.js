import React from 'react';
import Layout from './HOC/Layout';
import Main from './Content/Main';
import AOS from 'aos';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      os: -1,
      alert: 'none',
      show: 'none',
      showToggle: false
    }
  }
  CallFancy = (e, c) => {
    var $ = require("jquery");
    window.jQuery = $;
    require("@fancyapps/fancybox");    
    $.fancybox.open({
        src: e,
        opts : {
          caption : c         
        }
    });
  }
  
  componentDidMount() {
    this.setState({
      os: navigator.platform.indexOf('Win'),
    });
    AOS.init({
      duration: 900,
      delay: 200,
      disable: 'mobile',
      easing: 'ease-in-out-back'
    });
  }
  
  toggleFun = () => {
    if (!this.state.showToggle) {
      this.setState({
        show: 'block',
        showToggle: true
      });
    } else {
      this.setState({
        show: 'none',
        showToggle: false
      });
    }
  }
  alertTimer() {
    var time = 5;
    var x = setInterval(function() {
     time -= 1;
      // console.log("countdown " + time)
      if (time < 0) {
        // console.log("FINISHED")
        this.setState({alert: "none"})
        clearInterval(x);        
      }
    }.bind(this), 1000);
  }
  download = (function() {
    this.setState({alert: 'block'})
    this.alertTimer()
  }).bind(this)

  render() {
    
    return (
      <Layout os={this.state.os} alert={this.state.alert}>
        <Main 
          fancy={this.CallFancy}
          os={this.state.os}
          download={this.download}
          toggleFun={this.toggleFun}
          show={this.state.show}
        />
      </Layout>
    );
  }
}

export default App;
