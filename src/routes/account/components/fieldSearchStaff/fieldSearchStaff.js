import React from 'react';
import Select from 'react-select';
import {
  FormFeedback,
} from 'reactstrap';
import Bows from 'bows';

const log = Bows('Field - search staff');


class FieldSearchStaff extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      search: '',
    };
  }
  handleChange(option) {
    debugger
    if (this.props.disabled) {
      return;
    }
    debugger

    const value = option ? option.value : null;

    log(`Selected. Update value: ${JSON.stringify(value)}`);

    if (value) {
      this.props.fetchStaffBySearch('email', value);
      this.setState({search: value});
    }

    // manually update values.category
    this.props.onChange(this.props.name, value);
  }

  handleBlur() {
    if (this.props.disabled) {
      return;
    }
    log(`Update touched: true`);
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
  }

  render() {
    const {
      name,
      value,
      error,
      touched,
      disabled = false,
      autoFocus = false,

      getStaffBySearch,
      getOptionsStaff,
    } = this.props;

    const filteredStaff = getStaffBySearch('email', this.state.search);
    const optionsStaff = getOptionsStaff(filteredStaff);

    return (
      <div>
        <Select id={name}
                name={name}
                options={optionsStaff}
                value={value}
                touched={touched}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                searchable={true}
                disabled={disabled}
                autoFocus={autoFocus}
                className={error && 'is-invalid'}
                placeholder="Search …"
        />
        {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
      </div>
    );
  }
}

export default FieldSearchStaff;
