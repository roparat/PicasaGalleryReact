import * as React from 'react';
import * as PicasaService from '../PicasaService';
import SingleImage from './SingleImage';
import './AlbumCover.css';
import Loading from '../Loading';

class SingleGallery extends React.Component {
      constructor(props){
            super(props);
            this.state = {
                  isLoading:true,
            }
      }

      render(){
            if (this.state.isLoading)
                  return <Loading text={`Single Gallery loading ${this.props.params.galleryId}`}/>
            
            var imageList = this.gallery.photos.map((singleImage)=>{
                  singleImage.image.url = PicasaService.getImageUrl(singleImage.image.url,this.context.imageSize);
                  return <SingleImage key={singleImage.title} photo={singleImage} />;
            });

            return (
                  <div>
                        <div className="photos flex" >{imageList}</div>
                  </div>
                  );
      }

      componentDidMount() {
            var username = this.props.username || this.context.username;
            PicasaService.fetchImageFromGallery(username, this.props.params.galleryId)
            .then( (result)=>{
                  console.log(result);
                  this.gallery = result;
                  this.setState({isLoading:false});
            });
      }
}

SingleGallery.contextTypes = {
  username: React.PropTypes.string,
  imageSize: React.PropTypes.number
};


export default SingleGallery;