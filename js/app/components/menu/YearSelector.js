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
      <span>
        <li className={ this.props.yearSelected === null ? 'active' : '' }>
          <a
            href="javascript:void(0)"
            onClick={ () => this.handleYearSelect(null) }
          >
            Año actual
          </a>
        </li>
        <li className={ this.props.yearSelected === 1644 ? 'active' : '' }>
          <a
            href="javascript:void(0)"
            onClick={ () => this.handleYearSelect(1644) }
          >
            1644
          </a>
        </li>
        <li className={ this.props.yearSelected === 1869 ? 'active' : '' }>
          <a
            href="javascript:void(0)"
            onClick={ () => this.handleYearSelect(1869) }
          >
            1869
          </a>
        </li>
      </span>
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