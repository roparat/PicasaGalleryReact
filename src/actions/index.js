import * as c from '../constant';

export const resetGalleries = () => {
      return {
            type: 'GALLERYS:RESET'
      }
}

export const addGalleryToGalleries = (gallery) => {
      return {
            type: 'GALLERYS:ADD_GALLERY',
            gallery
      }
}

export const setGalleries = (gallerys) => {
      return {
            type: c.ALLGALLERIES_SET_GALLERIES,
            gallerys
      }
}

export const setSingleGallery = (singleGallery) => {
      return {
            type: c.SINGLEGALLERY_SET_PHOTOS,
            singleGallery
      }
}