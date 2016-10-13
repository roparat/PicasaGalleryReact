import React from 'react';
import * as PicasaService from '../PicasaService';
import store from '../store';
import {setGalleries} from '../actions/';
import {connect} from 'react-redux';
import AllGalleryUI from '../components/AllGalleryUI';


class AllGallery extends React.Component {

      constructor(props) {
            super(props);
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
            return <AllGalleryUI gallerys={this.props.gallerys} loadSingleGallery={this.loadSingleGallery}/>
      }

      componentDidMount() {
            var username = this.props.username;

            PicasaService.fetchGalleryList(username)
            .then((result) => {
                  store.dispatch(setGalleries(result.gallerys));
            });
      }

}

const mapStateToProps = (store) => {
      return {
            gallerys : store.allGalleries,
            username : store.picasaSettings.username,
      }
}

export default connect(mapStateToProps)(AllGallery);