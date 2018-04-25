import React from 'react';
import {
  Formik,
  Form,
} from 'formik';
import {
  FormGroup,
  Label,
  Button,
  Col,
} from 'reactstrap';
import { withRouter } from 'react-router';
import Bows from 'bows';

import FieldTextareaInput from 'components/fieldTextAreaInput';
import FieldCheckboxBtnList from 'components/fieldCheckboxBtnList';


const log = Bows('Form');


class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      hasSubmitted: false,
    }
  }

  handleSubmit(values) {
    log('Submitting: ', values);

    setTimeout(() => {
      this.setState({hasSubmitted: true});
    }, 2000);


    // todo - save

    // setTimeout(() => {
    //   this.props.history.push('/');
    // }, 8000);
  }

  render() {
    if (this.state.hasSubmitted) {
      return (
        <div className="alert alert-success mb-4">
          Thank you for your feedback, it helps us improve!
        </div>
      )
    }

    return (
      <Formik
        onSubmit={(values) => this.handleSubmit(values)}
        render={(({values, setFieldValue, setFieldTouched, isSubmitting}) => (
          <Form>
            <FormGroup row>
              <Col sm={{size: 12}}>
                {/*<Label htmlFor="stamps">Select any of these that describe Snippet?</Label>*/}
                <FieldCheckboxBtnList name="stamps"
                                      value={values.stamps}
                                      options={[
                                        { value: 'Loved it', label: 'Loved it' },
                                        { value: 'Useful', label: 'Useful' },
                                        { value: 'Thank you', label: 'Thank you' },
                                        { value: 'Not good', label: 'Not good' },
                                      ]}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={{size: 12}}>
                <Label htmlFor="description">What did you like or could be improved?</Label>
                <FieldTextareaInput name="description" rows={4} />
              </Col>
            </FormGroup>

            <Button type="submit" color="primary">{isSubmitting ? 'Submitting...' : 'Leave feedback'}</Button>
          </Form>
        ))}
      />
    )
  }
}

export default withRouter(FeedbackForm);
