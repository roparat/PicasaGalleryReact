import React from 'react';
import * as PicasaService from './PicasaService';
import AlbumCover from './AlbumCover';
import {Link} from 'react-router';
import Loading from './Loading';

export default class AllGallery extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  isDone:false
            };
            this.loadSingleGallery = this.loadSingleGallery.bind(this);
      }

      static get propTypes() {
            return {
                  username : React.PropTypes.string
            }
      }

      loadSingleGallery( albumid ){
            
      }

      render() {
            if (this.state.isDone){
                  var galleryjsx = this.gallerys.gallerys.map((gallery)=>{
                        return (
                              <Link key={gallery.albumid} to={`/gallery/${gallery.albumid}`}>
                                    <AlbumCover key={`a-${gallery.albumid}`} albumid={gallery.albumid} imageURL={PicasaService.getImageUrl(gallery.albumCover,240,true)} title={gallery.title} onAlbumClick={this.loadSingleGallery}/>
                              </Link>
                              );
                  });
                  return <div className="gallery-list flex">{galleryjsx}</div>;
            } else {
                  return <Loading />;
            }

      }

      componentDidUpdate(prevProps, prevState, prevContext){
            if (this.context.username !== prevContext.username){
                  console.log('loading...');
                  this.setState({isDone:false});
                  var username = this.props.username || this.context.username;
                  PicasaService.fetchGalleryList(username)
                  .then((result) => {
                        this.gallerys = result;
                        this.setState({
                              isDone:true
                        });
                  });
            }
      }

      componentDidMount() {
            var username = this.props.username || this.context.username;

            PicasaService.fetchGalleryList(username)
            .then((result) => {
                  this.gallerys = result;
                  this.setState({
                        isDone:true
                  });
            });
      }
}

AllGallery.contextTypes = {
  username: React.PropTypes.string
};
