import React, { Component } from 'react';
import './App.css';
import SettingsContainer from './containers/SettingsContainer';
import {IndexLink} from 'react-router';

class NavBar extends Component {
  render(){
    return (
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">Picasa Gallery</IndexLink>
          </div>
        </nav>
      );
  }
};


var App = (props) => {
  return (
      <div className="App">
        <NavBar/>
        <SettingsContainer />
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default App;
