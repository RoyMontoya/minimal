import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/stream/index.jsx';
import configureStore from './store/configureStore';
import * as actions from './actions';
import {Provider} from 'react-redux';

const tracks = [
  {
    title: 'Some track'
  }, {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
<Provider store={store}>
  <Stream/>
</Provider>,
document.getElementById('app'));

module.hot.accept();
