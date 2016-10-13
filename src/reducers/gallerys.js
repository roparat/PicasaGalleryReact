import * as c from '../constant';

const galleries = (state=[], action) => {
      switch (action.type) {
            case 'GALLERYS:RESET':
                  return [];

            case 'GALLERYS:ADD_GALLERY':
                  return state.concat(action.gallery);

            case c.ALLGALLERIES_SET_GALLERIES:
                  return action.gallerys || [];

            default:
                  return state;
      }
}

export default galleries;