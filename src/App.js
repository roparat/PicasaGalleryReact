import React, { Component } from 'react';
import './App.css';
import {IndexLink} from 'react-router';

class NavBar extends React.Component {
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

class SettingsPanel extends React.Component {
  constructor(){
    super();
    this.changeImageSize = this.changeImageSize.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.state = {
      username: ''
    }
  }

  componentWillMount() {
    this.setState({
      username:this.context.username
    });
  }

  componentWillReceiveProps(nextProps, nextContext){
    console.log(`will receive props ${nextProps} ${nextContext}`);
    this.setState({
      username:nextContext.username
    });
  }

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form className="form-inline">
            <div className="form-group">
              <label data-for="username">Name</label>
              <span> </span>
              <input type="text" className="form-control" id="username" placeholder="roparat" value={this.state.username} onChange={this.changeUsername}/>
            </div>
            <span> </span>
            <button type="submit" className="btn btn-default" onClick={this.updateUsername}>Update</button>
            <span>  </span>
            <div className="form-group">
              <label data-for="imagesize">Image Size</label>
              <span> </span>
              <input type="number" className="form-control" id="imagesize" placeholder="1024" value={this.context.imageSize} onChange={this.changeImageSize}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  changeImageSize(e){
    this.props.onChange({imageSize:parseInt(e.target.value,10)});
  }

  changeUsername(e){
    this.setState({username:e.target.value});
  }

  updateUsername(e){
    this.props.onChange({username:this.state.username});
  }
}

SettingsPanel.contextTypes = {
  username: React.PropTypes.string,
  imageSize: React.PropTypes.number
};

class App extends Component {

  constructor(){
    super();
    this.state = {
      username:'roparat',
      imageSize:1024
    };
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }

  getChildContext(){
    console.log('getChildContext');
    return {
      username:this.state.username,
      imageSize:this.state.imageSize
    }
  }

  handleSettingsChange(settings){
    console.log('handleSettingsChange');
    if (settings.imageSize){
      this.setState({imageSize:settings.imageSize});
    }
    if (settings.username){
      this.setState({username:settings.username});
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <SettingsPanel onChange={this.handleSettingsChange}/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }

  componentWillReceiveProps(props){
    console.log(props);
  }
}

App.childContextTypes = {
  username : React.PropTypes.string,
  imageSize : React.PropTypes.number
};

export default App;
