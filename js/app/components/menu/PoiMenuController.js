import React, { Component } from 'react';

/**
* Menu to select a map
**/
export default class PoiMenuController extends Component {

  componentDidMount() {
    const poiPosition = $(window).height() - $("#poiMenu").height();
    console.log($("#poiMenu").height());
    console.log(poiPosition);
    $("#poiMenu").css({'top': poiPosition});
  }

  render() {
    return (
      <div>
        POI
      </div>
    );
  }
}
