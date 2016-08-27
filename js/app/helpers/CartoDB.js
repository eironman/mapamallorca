/**
 * Class to interact with cartodb
 */
export default class CartoDB {

  constructor(map) {
    this.map = map;
    this.user = 'eironman';
    this.poiLayer = {
      user_name: this.user,
      type     : 'cartodb',
      sublayers: [{}];
  }

  getUser() {
    return this.user;
  }

  getPoiLayer() {
    return this.poiLayer;
  }

  addShape(shapeId) {

    // Shape style
    this.poiLayer.sublayers[0].cartocss = 
      '#shape {' +
        'polygon-fill: #0d47a1;' +
        'polygon-opacity: 0.9;' +
        'line-color: #FFF;' +
        'line-width: 0.5;' +
        'line-opacity: 1;' +
      '}';

    // Query to retrieve the shape data
    this.poiLayer.sublayers[0].sql =
      'SELECT * FROM shape WHERE cartodb_id=' + shapeId;

    // Add the shape to the map
    cartodb.createLayer(this.map, this.poiLayer)
      .addTo(this.map)
      .done((layer) => {
        cdb.vis.Vis.addInfowindow(this.map, layer.getSubLayer(0), ['name', 'description']);
      });
  }
}
