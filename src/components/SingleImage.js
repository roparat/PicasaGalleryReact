import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class SingleImage extends React.Component {
      render(){
            return (
                 <div className="gallery-panel thumbnail" >
                        <a href={this.props.photo.image.url}>
                              <img className="gallery-image" alt={this.props.photo.title} src={this.props.photo.thumbnail.url}></img>
                              <div>{this.props.photo.title} ({this.props.photo.info.width} x {this.props.photo.info.height})</div>
                        </a>
                        <CopyToClipboard text={this.props.photo.image.url}>
                              <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-copy" aria-hidden="true"></span></button>
                        </CopyToClipboard>
                  </div>
            );
      }
}

export default SingleImage;