import React from 'react';
import {
  Formik,
  Form,
} from 'formik';
import {
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import FieldTextareaInput from 'components/fieldTextAreaInput';
import FieldStampBtnList from 'components/fieldStampBtnList';

class FeedbackForm extends React.Component {
  render() {
    return (
      <Formik
        render={(({values, setFieldValue, setFieldTouched}) => (
          <Form>
            <FormGroup>
              <Label htmlFor="stamps" />
              <FieldStampBtnList name="stamps"
                                 value={values.stamps}
                                 onChange={setFieldValue}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">How was your experience today?</Label>
              <FieldTextareaInput name="description" />
            </FormGroup>

            <Button>Leave feedback</Button>
          </Form>
        ))}
      />
    )
  }
}

export default FeedbackForm;
