import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
* Displays the full screen message
**/
class FullScreenMessage extends Component {

  componentDidMount()
  {
    const messageHeight = $("#fullScreenMessage p").height();
    $("#fullScreenMessage").css({
      'margin-top':'-' + messageHeight + 'px',
      'visibility': 'visible'
    });
  }

  render()
  {
    if (this.props.showFullScreenMessage) {
      return (
        <p>
        <strong>mapamallorca</strong> te permite conocer la historia de Palma a través de sus mapas y construcciones características a lo largo de su historia.
        En la parte superior podrás seleccionar una época de la ciudad para compararla con la época actual.
        En la parte inferior podrás seleccionar puntos de interés de la ciudad, tanto actuales como de épocas pasadas.
        Para cualquier duda o sugerencia puedes escribir un correo a <strong>contacto@mapamallorca.com</strong>
        </p>
      );
    }

    return null;
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    showFullScreenMessage: state.appReducer.showFullScreenMessage
  };
};

export default connect(mapStateToProps)(FullScreenMessage);