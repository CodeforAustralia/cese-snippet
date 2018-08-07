import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldSelectTags from 'components/fieldSelectTags';
import IndexedPartLayout from './../../indexedPartLayout';

const Part9Staff = ({
                      index,
                      totalIndex,
                      values,
                      errors,
                      touched,
                      setFieldValue,
                      setFieldTouched,
                      optionsStaff,
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="staff" className="mb-1">Staff Involved</Label>
            <FormText color="muted" className="mt-0 mb-2">
              Who are the staff members involved in organising or facilitating the program?
            </FormText>
            <FieldSelectTags name="staff"
                             options={optionsStaff}
                             value={values.staff}
                             onChange={setFieldValue}
                             onBlur={setFieldTouched}
                             touched={touched.staff}
                             error={errors.staff}
            />
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part9Staff;
