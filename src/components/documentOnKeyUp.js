import React from 'react';
import PropTypes from 'prop-types';

class DocumentOnKeyUp extends React.PureComponent {
  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if (event.keyCode === this.props.keyCode) {
      this.props.onKeyUp();
    }
  }
  componentDidMount(){
    document.addEventListener("keyup", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keyup", this.escFunction, false);
  }
  render(){
    return null;
  }
}

DocumentOnKeyUp.propTypes = {
  keyCode: PropTypes.number,
  onKeyUp: PropTypes.func,
};

export default DocumentOnKeyUp;
