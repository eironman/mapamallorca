import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import HomePage from './components/HomePage'
import MapController from './components/map/MapController';
import MenuController from './components/menu/MenuController';

let store = createStore(reducer);

// Top menu
ReactDOM.render(
  <Provider store={store}>
    <MenuController />
  </Provider>,
  document.getElementById('menu')
);

// Map
ReactDOM.render(
  <Provider store={store}>
    <MapController />
  </Provider>,
  document.getElementById('mapBox')
);
