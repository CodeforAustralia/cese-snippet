import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Bows from 'bows';

const log = Bows('Field - category');


class FieldCategory extends React.Component {

  handleChange = option => {
    log(`Selected: ${JSON.stringify(option)}`);
    // manually update values.category
    this.props.onChange('category', option.value);
  };

  handleBlur = () => {
    // manually update touched.category
    this.props.onBlur('category', true);
  };

  render() {
    const { options, value, error, touched, name } = this.props;
    return (
      <Select id={name} name={name}
        options={options}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={value}
      />
    );
  }
}

export default FieldCategory;
