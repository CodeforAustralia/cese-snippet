import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';
import * as typeformEmbed from '@typeform/embed';

import style from './style.scss';


class GiveFeedbackEmbedModal extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  openModal () {
    typeformEmbed.makePopup(this.props.link, {
      autoOpen: true,
      hideFooter: true,
      hideHeaders: true,
    });
  }
  render() {
    return (
      <Button size="sm" className={style.button} onClick={this.openModal}>Give Feedback</Button>
    )
  }
}

GiveFeedbackEmbedModal.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GiveFeedbackEmbedModal;
