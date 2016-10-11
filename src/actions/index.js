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