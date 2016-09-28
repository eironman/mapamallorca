import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import HomePage from './components/HomePage'
import MapController from './components/map/MapController';
import MapsMenuController from './components/menu/MapsMenuController';
import PoiMenuController from './components/menu/PoiMenuController';

let store = createStore(reducer);

// Maps menu
ReactDOM.render(
  <Provider store={store}>
    <MapsMenuController />
  </Provider>,
  document.getElementById('mapsMenu')
);

// Poi menu
ReactDOM.render(
  <Provider store={store}>
    <PoiMenuController />
  </Provider>,
  document.getElementById('poiMenu')
);

// Map
ReactDOM.render(
  <Provider store={store}>
    <MapController />
  </Provider>,
  document.getElementById('mapBox')
);
