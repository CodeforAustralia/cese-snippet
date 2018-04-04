import React from 'react';
import Select from 'react-select';

class FieldKeywords extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      multiValue: props.value || [],
    };
  }

  handleOnChange (value) {
    this.setState({ multiValue: value });
  }

  render () {
    const { options, name } = this.props;
    const { multiValue } = this.state;
    return (
      <Select.Creatable
        id={name}
        name={name}
        multi={true}
        options={options}
        onChange={this.handleOnChange}
        value={multiValue}
      />
    );
  }
}

export default FieldKeywords;
