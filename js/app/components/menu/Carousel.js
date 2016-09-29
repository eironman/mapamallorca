import React, { Component } from 'react';

/**
* Carousel for maps and poi
**/
export default class Carousel extends Component {

  createElementsForCarousel() {
    const elements = [];
    let element;
    for (let i = 0; i < this.props.children.length; i++) {
      element = (
        <li key={i}>
          { this.props.children[i] }
        </li>
      );
      elements.push(element);
    }

    return elements;
  }

  render() {
    const elements = this.createElementsForCarousel();

    return (
      <div className="carousel">
        <ul>
          { elements }
        </ul>
      </div>
    );
  }
}
