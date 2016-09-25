import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllGallery from './AllGallery';
import SingleGallery from './SingleGallery';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AllGallery} />
      <Route path="gallery/:galleryId" component={SingleGallery} />
    </Route>
  </Router>),
  document.getElementById('root')
);