import React from 'react';
import Select from 'react-select';
import Bows from 'bows';


const log = Bows('Field - name');


class FieldName extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      selectedValue: props.value,
    }
  }

  handleChange (option) {
    log(`Selected: ${JSON.stringify(option)}`);

    this.setState({ selectedValue: option ? option.value: null });

    // // manually update values.category
    this.props.onChange(this.props.name, option? option.value : null);
  }

  handleBlur() {
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
  }

  render () {
    const { options, name } = this.props;

    const { selectedValue } = this.state;

    if (!options.find(o => o.value === selectedValue)) {
      options.push({ value: selectedValue, label: selectedValue });
    }

    log('Selected value:', selectedValue);

    return (
      <Select.Creatable
        id={name}
        name={name}
        options={options}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={selectedValue}
      />
    );
  }
}

export default FieldName;
