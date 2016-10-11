const galleries = (state=[], action) => {
      switch (action.type) {
            case 'GALLERYS:RESET':
                  return [];

            case 'GALLERYS:ADD_GALLERY':
                  return state.concat(action.gallery);

            default:
                  return state;
      }
}

export default galleries;