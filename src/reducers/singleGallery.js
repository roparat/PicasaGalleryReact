const singleGallery = (state=[], action) => {
      switch (action.type) {
            case 'SINGLEGALLERY:RESET':
                  return [];

            case 'SINGLEGALLERY:ADD_IMAGE':
                  return state.concat(action.image);

            default:
                  return state;
      }
}

export default singleGallery;