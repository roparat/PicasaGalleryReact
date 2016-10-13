import React from 'react';
import { Control, Form } from 'react-redux-form';
import {changeUsername,changeImageSize} from '../actions';

export default class SettingsPanel extends React.Component {

  constructor(){
    super();
    this.changeImageSize = this.changeImageSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <div className="panel panel-default" >
        <div className="panel-body">
          <Form className="form-inline" model="form.settings" onSubmit={(val) => this.handleSubmit(val)} >
            <div className="form-group">
              <label data-for="username">Name</label>
              <span> </span>
              <Control.text model="form.settings.username" type="text" className="form-control" />
            </div>
            <span> </span>
            <button type="submit" className="btn btn-default">Update</button>
            <span>  </span>
            <div className="form-group">
              <label data-for="imagesize">Image Size</label>
              <span> </span>
              <Control.text model="form.settings.imageSize" 
                            type="number" 
                            className="form-control" 
                            onChange={this.changeImageSize}
               />
            </div>
          </Form>
        </div>
      </div>
    );
  }

  changeImageSize(e){
    console.log('change image size');
    let {dispatch} = this.props;
    dispatch(changeImageSize(e.target.value));
  }

  handleSubmit(val){
    console.log(val);
    let {dispatch} = this.props;
    dispatch(changeUsername(val.username));
  }

}
