import React from 'react';
import bows from 'bows';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { getCategoriesLevel1 } from 'helpers/staticSelectors';


const log = bows('field - category');

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.level1Categories = getCategoriesLevel1();
    this.state = {
      selectedOption: '',
    }
  }
  handleChange(selectedOption) {
    this.setState({ selectedOption });
    log(`Selected: ${JSON.stringify(selectedOption)}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={this.handleChange}
        options={this.level1Categories}
      />
    );
  }
}

export default CategorySelect;
