import React from 'react';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed'
import style from './style.scss';

class GiveFeedbackEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, this.props.link, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <div className={style.form} ref={(el) => this.el = el} style={{width: '100%', height: '500px'}} />
    )
  }
}

GiveFeedbackEmbed.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GiveFeedbackEmbed;

