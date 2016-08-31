import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { togglePoi } from '../../actions/mapActions';
import { POIS } from '../../constants/constants';

/**
* Options for selector of points of interest
**/
class TallestBuildings extends Component {

  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
  }

  render()
  {
    const poiSelected = this.props.poiSelected;
    return (
      <ul>
        <li>
          <a
            className={ poiSelected === POIS.TORRE_ES_FORTI ? 'active' : '' }
            href="javascript:void(0)"
            onClick={ () => this.handlePoiSelect(POIS.TORRE_ES_FORTI) }
          >
            Torre Es Forti
          </a>
        </li>
      </ul>
    );
  }
}

TallestBuildings.propTypes = {
  poiSelected: PropTypes.number
}

export default connect()(TallestBuildings);