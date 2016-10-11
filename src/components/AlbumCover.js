import React from 'react';
import './AlbumCover.css'

class AlbumCover extends React.Component {

      constructor(){
            super();
            this._handleClick = this._handleClick.bind(this);
      }

      static get propTypes() {
            return {

            }
      }

      _handleClick(e){
            console.log(`handleClick ${e}`);
            alert("Click");
            this.props.onAlbumClick(this.props.albumId);
      }

      render(){
            return (
                  <div className="gallery-panel thumbnail" >
                        <div className="gallery-panel-image">
                              <img className="gallery-image" src={this.props.imageURL} alt={this.props.title} />
                        </div>
                        <div className="gallery-panel-title">{this.props.title}</div>
                  </div>
            );
      }
}

export default AlbumCover;