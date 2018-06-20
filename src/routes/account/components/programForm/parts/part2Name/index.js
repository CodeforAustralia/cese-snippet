import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
} from 'reactstrap';
import IndexedPartLayout from './../../indexedPartLayout';

const Part2Name = ({
                     index,
                     totalIndex,
                     values,
                     errors,
                     setFieldValue,
                     setFieldTouched,
                   }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
          <Label htmlFor="name">Program Name</Label>
          <Input type="text" id="name" name="name"
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          defaultValue={values.name}
          invalid={errors.name}
          error={errors.name}
        />
        {/*<FieldName name="name"*/}
        {/*options={optionsProgramTemplates}*/}
        {/*value={values.name}*/}
        {/*onChange={this.props.setFieldValue}*/}
        {/*onBlur={this.props.setFieldTouched}*/}
        {/*touched={touched.name}*/}
        {/*invalid={errors.name} />*/}
        {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
        </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part2Name;
