import * as c from '../constant';

const initialState = {
      singleGallery : {},
      loading : false
}

const singleGallery = (state=initialState, action) => {
      switch (action.type) {

            case c.SINGLEGALLERY_SET_PHOTOS:
                  return Object.assign({},state,{singleGallery:action.singleGallery});

            default:
                  return state;
      }
}

export default singleGallery;