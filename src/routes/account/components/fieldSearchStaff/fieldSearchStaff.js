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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      search: '',
    };
  }

  handleInputChange(query) {
    if (this.props.disabled) {
      return;
    }

    log(`Fetching query: ${JSON.stringify(query)}`);

    if (query) {
      this.props.fetchStaffBySearch('email', query);
      this.setState({search: query});
    }

  }

  handleChange(option) {
    if (this.props.disabled) {
      return;
    }

    const value = option ? option.value : null;

    log(`Selected. Update value: ${JSON.stringify(value)}`);

    // manually update values[prop]
    this.props.onChange(this.props.name, value);
  }

  handleBlur() {
    if (this.props.disabled) {
      return;
    }
    log(`Update touched: true`);
    // manually update touched[prop]
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

      isFetchingStaff,
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
                onInputChange={this.handleInputChange}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                searchable={true}
                disabled={disabled}
                autoFocus={autoFocus}
                className={error && 'is-invalid'}
                placeholder="Search …"
               isLoading={isFetchingStaff}
        />
        {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
      </div>
    );
  }
}

export default FieldSearchStaff;
