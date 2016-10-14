if (/*@cc_on!@*/false || !!document.documentMode) {
  internetExplorerPolyfill();
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MapController from './components/map/MapController';
import MapsMenuController from './components/menu/MapsMenuController';
import PoiMenuController from './components/menu/PoiMenuController';
import FullScreenMessage from './components/FullScreenMessage';

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

// Full screen message
ReactDOM.render(
  <Provider store={store}>
    <FullScreenMessage />
  </Provider>,
  document.getElementById('fullScreenMessage')
);

// Map
ReactDOM.render(
  <Provider store={store}>
    <MapController />
  </Provider>,
  document.getElementById('mapBox')
);

// Polyfills for internet explorer
function internetExplorerPolyfill() {
  if (typeof Object.assign != 'function') {
    (function () {
      Object.assign = function (target) {
        'use strict';
        // We must check against these specific cases.
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source !== undefined && source !== null) {
            for (var nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        }
        return output;
      };
    })();
  }
}