import React from 'react';

export default class SettingsPanel extends React.Component {
  constructor(){
    super();
    this.changeImageSize = this.changeImageSize.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form className="form-inline">
            <div className="form-group">
              <label data-for="username">Name</label>
              <span> </span>
              <input type="text" className="form-control" id="username" placeholder="roparat" value={this.props.username} onChange={this.changeUsername}/>
            </div>
            <span> </span>
            <button type="submit" className="btn btn-default" onClick={this.updateUsername}>Update</button>
            <span>  </span>
            <div className="form-group">
              <label data-for="imagesize">Image Size</label>
              <span> </span>
              <input type="number" className="form-control" id="imagesize" placeholder="1024" value={this.props.imageSize} onChange={this.changeImageSize}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  changeImageSize(e){
    //this.props.onChange({imageSize:parseInt(e.target.value,10)});
  }

  changeUsername(e){
    //this.setState({username:e.target.value});
  }

  updateUsername(e){
    //this.props.onChange({username:this.state.username});
  }
}
