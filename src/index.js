import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllGallery from './containers/AllGallery';
import SingleGallery from './containers/SingleGallery';


ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AllGallery} />
        <Route path="gallery/:galleryId" component={SingleGallery} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
);