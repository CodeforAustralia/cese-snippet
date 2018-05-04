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
        <div className="alert alert-success mb-0">
          Thanks for your feedback, it will help us improve!
        </div>
      )
    }

    return (
      <Formik
        onSubmit={(values) => this.handleSubmit(values)}
        render={(({values, setFieldValue, setFieldTouched, isSubmitting}) => (
          <Form>

            <FormGroup row className="mb-0">
              <Col sm={{size: 12}}>
                <Label htmlFor="stamps">Please select any of these:</Label>
                <FieldCheckboxBtnList name="stamps"
                                      value={values.stamps}
                                      options={[
                                        { value: 'Loved it', label: 'Loved it' },
                                        { value: 'Useful', label: 'Useful' },
                                        { value: 'Thank you', label: 'Thank you' },
                                        { value: 'Not good', label: 'Not good' },
                                      ]}
                                      disabled={isSubmitting}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={{size: 12}}>
                <Label htmlFor="description">It’s OK if you don’t, but was there anything that you would like to share?</Label>
                {/*Like other ideas communities you've been a part of?*/}
                {/*Your day job if it's relevant (e.g. a developer or designer)?*/}
                {/*Any websites, blogs or profiles to share?*/}
                <FieldTextareaInput name="description" rows={4} disabled={isSubmitting} />
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
