import React from 'react';
import Header from '../components/Header/Header';
import Panel from '../components/Header/Panel';

const Layout = (props) => {
  return (
        <div>  
          <div className="alert alert-success alert-panel text-center" style={{display: props.alert}} role="alert">
                Your download has started, proceed to Step #2
          </div>     
          <Panel />   
          <Header os={props.os}/>
          {props.children}
        </div>
  );
}

export default Layout;