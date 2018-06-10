import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    const { isModal } = this.props;
    if (this.el) {

      if (isModal) {
        typeformEmbed.makePopup(url, options);
      } else {
        typeformEmbed.makeWidget(this.el, "https://snippet1.typeform.com/to/ezQ2ub", {
          hideFooter: true,
          hideHeaders: true,
          opacity: 0
        });
      }
    }
  }
  render() {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
    )
  }
}

export default Form;

