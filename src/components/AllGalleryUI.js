import React from 'react';
import AlbumCover from './AlbumCover';
import {Link} from 'react-router';
import {getImageUrl} from '../PicasaService';

const AllGalleryUI = (props)=>{
      var galleryjsx = props.gallerys.map((gallery)=>{
            return (
                  <Link key={gallery.albumid} to={`/gallery/${gallery.albumid}`}>
                        <AlbumCover key={`a-${gallery.albumid}`} albumid={gallery.albumid} imageURL={getImageUrl(gallery.albumCover,240,true)} title={gallery.title} onAlbumClick={props.loadSingleGallery}/>
                  </Link>
                  );
            });
      return (
            <div className="gallery-list flex">{galleryjsx}</div>
      );
}

export default AllGalleryUI;

