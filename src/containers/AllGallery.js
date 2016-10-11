import React from 'react';
import * as PicasaService from '../PicasaService';
import store from '../store';
import {resetGalleries,addGalleryToGalleries} from '../actions/';
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
                  store.dispatch(resetGalleries());
                  result.gallerys.forEach((single)=>{
                        store.dispatch(addGalleryToGalleries(single));
                  })
            });
      }

}

const mapStateToProps = (store) => {
      return {
            gallerys : store.allGalleries
      }
}

export default connect(mapStateToProps)(AllGallery);