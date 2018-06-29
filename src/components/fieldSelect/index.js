import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Bows from 'bows';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';

const log = Bows('Field - select');


class FieldSelect extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(option) {
    if (this.props.disabled) {
      return;
    }
    log(`Selected: ${JSON.stringify(option)}`);
    // // manually update values.category
    this.props.onChange(this.props.name, option ? option.value : null);
  }

  handleBlur() {
    if (this.props.disabled) {
      return;
    }
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
  }

  render() {
    const { options, value,
      // invalid = {}, touched = {},
      name, disabled = false, clearable = true, placeholder = null, searchable = null, arrowRenderer,
      autoFocus = false,
      error = null,
    } = this.props;
    return (
      <div>
        <Select
          ref={(el) => this.el = el}
          id={name}
          name={name}
          clearable={clearable}
          disabled={disabled}
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          searchable={searchable}
          value={value}
          autoFocus={autoFocus}
          className={error && 'is-invalid'}
          arrowRenderer={arrowRenderer}
        />
        {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
      </div>
    );
  }
}

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    // value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    // label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  // value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default FieldSelect;
