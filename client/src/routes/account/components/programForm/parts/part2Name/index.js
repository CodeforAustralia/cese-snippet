import React from 'react'
import IndexedPartLayout from './../../indexedPartLayout';

const Part2Name = ({ index, totalIndex, }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        {/*<FormGroup row>*/}
        {/*<Col md={8}>*/}
        {/*<Label htmlFor="name">Program name</Label>*/}
        {/*<Input type="text" id="name" name="name"*/}
        {/*onChange={this.props.handleChange}*/}
        {/*onBlur={this.props.handleBlur}*/}
        {/*defaultValue={values.name}*/}
        {/*invalid={errors.name}*/}
        {/*error={errors.name}*/}
        {/*/>*/}
        {/*/!*<FieldName name="name"*!/*/}
        {/*/!*options={optionsProgramTemplates}*!/*/}
        {/*/!*value={values.name}*!/*/}
        {/*/!*onChange={this.props.setFieldValue}*!/*/}
        {/*/!*onBlur={this.props.setFieldTouched}*!/*/}
        {/*/!*touched={touched.name}*!/*/}
        {/*/!*invalid={errors.name} />*!/*/}
        {/*{errors.name && <FormFeedback>{errors.name}</FormFeedback>}*/}
        {/*</Col>*/}
        {/*</FormGroup>*/}
      </div>
    </IndexedPartLayout>
  )
};

export default Part2Name;
