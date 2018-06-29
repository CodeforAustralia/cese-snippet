import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldRadioList from 'components/fieldRadioList';
import IndexedPartLayout from './../../indexedPartLayout';

const Part6FocusGroup = ({
                           index,
                           totalIndex,
                           values,
                           errors,
                           optionsFocusGroup,
                           setFieldValue,
                           setFieldTouched,
                         }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row
                   className={values.focusGroup === 'Other' ? 'mb-1' : ''}
        >
          <Col md={8}>
            <Label className="mb-1">Participant Focus Group</Label>
            <FormText color="muted" className="mt-0 mb-3">Is the program catering to a specific group?</FormText>

            <FieldRadioList name="focusGroup"
                            value={values.focusGroup}
                            options={optionsFocusGroup}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.focusGroup}
            />
          </Col>
        </FormGroup>

        {values.focusGroup === 'Other' &&
        <FormGroup row>
          <Col md={8}>
            <FieldTextInput name="focusGroupOther"
                            error={errors.focusGroupOther}
                            placeholder={`Please describe "Other"`}
                            autoFocus={true}
            />
          </Col>
        </FormGroup>
        }
      </div>
    </IndexedPartLayout>
  )
};

export default Part6FocusGroup;
