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

  createItem(year, text)
  {
    return (
      <li>
        <a
          className={ this.props.yearSelected === year ? 'active' : '' }
          href="javascript:void(0)"
          onClick={ () => this.handleYearSelect(year) }
        >
          { text }
        </a>
      </li>
    );
  }

  render() {

    return (
      <li>
        <a href="javascript:void(0)">Selecciona un año</a>
        <ul>
          { this.createItem(null, 'Año Actual') }
          { this.createItem(1644, '1644') }
          { this.createItem(1869, '1869') }
          { this.createItem(1860, '1860 (Defensa)') }
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