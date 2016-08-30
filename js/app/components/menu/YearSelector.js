import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectYear } from '../../actions/mapActions';

/**
* Selector of year
**/
class YearSelector extends Component {

  handleYearSelect(year) {
    this.props.dispatch(selectYear(year));
  }

  render() {

    return (
      <li>
        <a href="javascript:void(0)">Selecciona un año</a>
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handleYearSelect(null) }
            >
              Año actual
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handleYearSelect(1644) }
            >
              1644
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handleYearSelect(1869) }
            >
              1869
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    yearSelected: state.mapReducer.yearSelected
  };
};

export default connect(mapStateToProps)(YearSelector);