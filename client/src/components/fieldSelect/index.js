import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Bows from 'bows';
import PropTypes from 'prop-types';

const log = Bows('Field - select');


class FieldSelect extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(option) {
    log(`Selected: ${JSON.stringify(option)}`);
    // // manually update values.category
    this.props.onChange(this.props.name, option ? option.value : null);
  }

  handleBlur() {
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
  }

  render() {
    const { options, value, error, touched, name, disabled, clearable } = this.props;
    return (
      <Select
        id={name}
        name={name}
        clearable={clearable}
        disabled={disabled}
        options={options}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={value} />
    );
  }
}

// todo
FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  // value: PropTypes.string,
  // disabled: PropTypes.bool,
};

export default FieldSelect;
