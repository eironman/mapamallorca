import React, { Component, PropTypes } from 'react';

/**
* Displays the info about the POI selected
**/
export default class InfoCard extends Component {

  handleToggleInfoClick() {
    const cardContent = $(".infoCardContent");
    cardContent.toggle(500, () => {
      if ( cardContent.css('display') === 'none' ) {
        $(".toggleInfoCard").html('mostrar');
      } else {
        $(".toggleInfoCard").html('ocultar');
      }
    });
  }

  componentDidMount() {
    
  }

  render() {
    console.log(this.props.query);
    return (
      <div id="infoCard">
        <div className="infoCardContent">
          <h2>MURALLA RENACENTISTA</h2>
          <p>Muralla iniciada en 1545 que venía a renovar la antigua muralla medieval. La obra culmina a comienzos del siglo XIX. Fue financiada en su mayor parte por la Corona y era la de mayor envergadura de las construidas en España. Tenía más de 5km de longitud. El proyecto final, en 1575, fue desarrollado por el ingeniero italiano Jacobo Paleazzo.</p>
        </div>
        <div
          className="toggleInfoCard"
          onClick={ () => this.handleToggleInfoClick() }
        >
          ocultar
        </div>
      </div>
    );
  }
}

InfoCard.propTypes = {
  query: PropTypes.string
}