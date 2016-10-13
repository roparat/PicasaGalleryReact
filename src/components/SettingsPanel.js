import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

export default class SettingsPanel extends React.Component {
  constructor(){
    super();
    this.changeImageSize = this.changeImageSize.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  render(){
    return (
      <div className="panel panel-default" >
        <div className="panel-body">
          <Form className="form-inline" model="form.settings" >
            <div className="form-group">
              <label data-for="username">Name</label>
              <span> </span>
              <Control.text model="form.settings.username" type="text" className="form-control" id="username" />
            </div>
            <span> </span>
            <button type="submit" className="btn btn-default" onClick={this.updateUsername}>Update</button>
            <span>  </span>
            <div className="form-group">
              <label data-for="imagesize">Image Size</label>
              <span> </span>
              <Control.text model="form.settings.imageSize" type="number" className="form-control" id="imagesize" onChange={this.changeImageSize} />
            </div>
          </Form>
        </div>
      </div>
    );
  }
  changeImageSize(e){
    //this.props.onChange({imageSize:parseInt(e.target.value,10)});
    const {dispatch} = this.props;
  }

  changeUsername(e){
    //this.setState({username:e.target.value});
  }

  updateUsername(e){
    //this.props.onChange({username:this.state.username});
  }
}
