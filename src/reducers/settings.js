import * as c from '../constant';

const initialState = {
      username:'roparat',
      imageSize:1024
    };

const settings = (state=initialState, action) => {
      switch (action.type) {
            case c.GLOBAL_SET_USERNAME:
                  return Object.assign({},state,{
                        username:action.username
                  });

            case c.GLOBAL_SET_IMAGESIZE:
                  return {...state,imageSize:action.imageSize};
 
            default:
                  return state;
      }
}

export default settings;