import {combineReducers} from 'redux';
import allGalleries from './gallerys';
import singleGallery from './singleGallery';
import picasaSettings from './settings';
import { combineForms } from 'react-redux-form';

const initialSettingFormState = {
      username:'roparat',
      imageSize:2048
}

const reducers = combineReducers({
      allGalleries,
      singleGallery,
      picasaSettings,
      form : combineForms({
                  settings: initialSettingFormState
            },'form')
});

export default reducers;