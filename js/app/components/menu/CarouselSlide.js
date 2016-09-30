import React, { Component, PropTypes } from 'react';

/**
* Slide element in the carousel
**/
export default class CarouselSlide extends Component {

  render() {
    return (
      <div
        onClick={ this.props.onClick }
        className={this.props.className}
        data-index={this.props['data-index']}
        style={this.props.style}
      >
        <img src={ this.props.src } />
      </div>
    );
  }
}

// Class properties
CarouselSlide.propTypes = {
  slideId     : PropTypes.number,
  selectedId  : PropTypes.number,
  onClick     : PropTypes.func,
  src         : PropTypes.string,
  className   : PropTypes.string, // Prop value comes from react-slick
  'data-index': PropTypes.number, // Prop value comes from react-slick
  style       : PropTypes.object  // Prop value comes from react-slick
};

CarouselSlide.defaultProps = {
  onClick: () => {},
};
