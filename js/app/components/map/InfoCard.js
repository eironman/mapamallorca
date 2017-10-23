import React, { Component } from 'react';

/**
* Displays the info about the POI selected
**/
export default class InfoCard extends Component {

  // Shows/hides the info
  handleToggleInfoClick()
  {
    const cardContent = $(".infoCardContent");
    cardContent.toggle(500, () => {
      if ( cardContent.css('display') === 'none' ) {
        $(".toggleInfoCard").html('info');
      } else {
        $(".toggleInfoCard").html('ocultar');
      }
    });
  }

  // Loads the info content
  loadContent(title, text)
  {
    $(".infoCardContentTitle").html(title);
    $(".infoCardContentText").html(text);
    $("#infoCard").show(500);
  }

  render()
  {
    return (
      <div id="infoCard">
        <div className="infoCardContent">
          <h2 className="infoCardContentTitle"></h2>
          <p className="infoCardContentText"></p>
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
