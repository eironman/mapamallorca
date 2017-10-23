import React, { Component } from 'react';
import PoiConsellBase from './PoiConsellBase';

/**
* Displays in the map the water windmills
**/
export default class WaterWindmill extends PoiConsellBase {

}

WaterWindmill.defaultProps = {
  layerName: '3',
  bbLatN   : 39.795656,
  bbLngW   : 2.650188,
  bbLatS   : 39.296388,
  bbLngE   : 3.127861,
  dataTitle: 'Molinos de Agua',
  dataText : 'Molinos de viento utilizados para la extacción de agua. El primer molino de agua construido en Mallorca data del año 1845, y fue utilizado por el ingeniero holandés Bouvij en las tareas de desecación del Pla de Sant Jordi.<br /><br /><a href="http://www.conselldemallorca.net/?&id_parent=1309&id_section=10630&id_son=10216&id_grandson=10217&id_greatgrandson=11915&id_lang=1" target="_blank">Más información</a>'
}