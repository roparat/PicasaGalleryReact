import React from 'react';
var loading = require('./loading.svg');
import './Loading.css';

const Loading = ()=>{
      return <div className="loading"><img className="loading-image" src={loading} alt="loading" /></div>;
}

export default Loading;