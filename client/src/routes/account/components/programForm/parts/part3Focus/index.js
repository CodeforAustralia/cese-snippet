import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldRadioList from 'components/fieldRadioList';
import IndexedPartLayout from './../../indexedPartLayout';

const Part3Focus = ({
                      index,
                      totalIndex,
                      values,
                      errors,
                      setFieldValue,
                      setFieldTouched,
                      optionsLevel1Categories,
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        {/*{!touched.category && selectedProgramTemplateOption ?*/}
        {/*!prefilledProgramTemplateId ?*/}
        {/*<Col md={{size:8}}>*/}
        {/*<Alert color="info">Would you like to prefill this form with known information for "{selectedProgramTemplateOption.label}"?*/}
        {/*<br/>*/}
        {/*<Button color="link" className="alert-link" onClick={() => this.handlePrefill(selectedProgramTemplateOption.value)}>Yes please, prefill.</Button></Alert>*/}
        {/*</Col> :*/}
        {/*null :*/}
        {/*null*/}
        {/*}*/}


        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="category">Program Focus Area</Label>
            <FieldRadioList name="category"
              value={values.category}
              options={optionsLevel1Categories}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.category}
              />
        </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part3Focus;

