import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';
import * as typeformEmbed from '@typeform/embed'

class GiveFeedbackEmbedModal extends React.Component {
  openModal () {
    typeformEmbed.makePopup(this.props.link, {
      autoOpen: true,
      hideFooter: true,
      hideHeaders: true,
    });
  }
  render() {
    return (
      <Button color="info" onClick={this.openModal}>Give Feedback</Button>
    )
  }
}

GiveFeedbackEmbedModal.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GiveFeedbackEmbedModal;

