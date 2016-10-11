const initialState = {
      username:'roparat',
      imageSize:1024
    };

const settings = (state=initialState, action) => {
      switch (action.type) {
            case 'SETTING:SET_USERNAME':
                  return Object.assign({},state,{
                        username:action.username
                  });

            case 'SETTING:SET_COPYSIZE':
                  return Object.assign({},state,{
                        imageSize:action.imageSize
                  });

            default:
                  return state;
      }
}

export default settings;