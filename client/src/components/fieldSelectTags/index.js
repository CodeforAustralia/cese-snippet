import React from 'react';
import Select from 'react-select';
import Bows from 'bows';


const log = Bows('Field - select tag');


class FieldSelectTags extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      multiValue: props.value || [],
    };
  }

  handleChange (option) {
    log(`Selected: ${JSON.stringify(option ? option.map(o => o.value) : null)}`);

    this.setState({ multiValue: option });
    // // manually update values.category
    this.props.onChange(this.props.name, option ? option.map(o => o.value) : null);

  }

  handleBlur() {
    // manually update touched.category
    this.props.onBlur(this.props.name, true);
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
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={multiValue}
      />
    );
  }
}

export default FieldSelectTags;
