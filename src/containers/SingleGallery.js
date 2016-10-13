import * as React from 'react';
import * as PicasaService from '../PicasaService';
import SingleGalleryUI from '../components/SingleGalleryUI';
import Loading from '../Loading';
import {connect} from 'react-redux';
import {setSingleGallery} from '../actions';
import store from '../store';

class SingleGallery extends React.Component {
      constructor(props){
            super(props);
            this.state = {
                  isLoading:false,
            }
      }

      render(){
            if (this.props.isLoading || this.props.gallery.photos === undefined)
                  return <Loading text={`Single Gallery loading ${this.props.params.galleryId}`}/>
            
            return <SingleGalleryUI gallery={this.props.gallery} />;
      }

      componentDidMount() {
            var username = this.props.username;
            PicasaService.fetchImageFromGallery(username, this.props.params.galleryId)
            .then( (result)=>{
                  store.dispatch(setSingleGallery(result));
            });
      }
}

const mapStateToProps = (store) => {
      return {
            gallery : store.singleGallery.singleGallery,
            username : store.picasaSettings.username,
            isLoading : store.singleGallery.loading
      }
}

export default connect(mapStateToProps)(SingleGallery);