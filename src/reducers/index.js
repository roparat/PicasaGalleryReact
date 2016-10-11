import {combineReducers} from 'redux';
import allGalleries from './gallerys';
import singleGallery from './singleGallery';
import picasaSettings from './settings';

const reducers = combineReducers({
      allGalleries,
      singleGallery,
      picasaSettings
});

export default reducers;