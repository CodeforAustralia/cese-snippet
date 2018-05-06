import React from 'react';
import Select from 'react-select';
import Bows from 'bows';
import PropTypes from 'prop-types';
import {
  FormFeedback
} from 'reactstrap';

const log = Bows('Field - select tags');


class FieldSelectTags extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      multiValue: props.value || [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== 'undefined' && nextProps.value !== this.state.multiValue) {
      this.setState({multiValue: nextProps.value});
    }
  }

  handleChange (option) {
    if (this.props.disabled) {
      return;
    }
    log(`Selected: ${JSON.stringify(option ? option.map(o => o.value) : null)}`);

    this.setState({ multiValue: option });
    // // // manually update values[name]
    this.props.onChange(this.props.name, option ? option.map(o => o.value) : null);
  }

  handleBlur() {
    if (this.props.disabled) {
      return;
    }
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
  }

  render () {
    const {
      options,
      name,
      error,
    } = this.props;
    const { multiValue } = this.state;

    const optsKeys = options.map(o => o.value);

    multiValue && multiValue.forEach(val => { // render initial values even if not in options provided
      if (!optsKeys.includes(val)) {
        options.push({value: val, label: val});
      }
    });

    return (
      <div>
        <Select.Creatable
          id={name}
          name={name}
          multi={true}
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={multiValue}
          className={error && 'is-invalid'}
        />
        {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
      </div>
    );
  }
}

FieldSelectTags.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    // value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    // label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  // value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default FieldSelectTags;
