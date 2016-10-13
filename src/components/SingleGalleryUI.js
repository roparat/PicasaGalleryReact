import React from 'react';
import SingleImage from './SingleImage';
import {getImageUrl} from '../PicasaService';

const SingleGalleryUI = (props) => {
      
      var imageList = props.gallery.photos.map((singleImage)=>{
            singleImage.image.url = getImageUrl(singleImage.image.url,props.imageSize);
            return <SingleImage key={singleImage.title} photo={singleImage} />;
      });

      return (
            <div>
                  <div className="photos flex" >{imageList}</div>
            </div>
            );
}

export default SingleGalleryUI;