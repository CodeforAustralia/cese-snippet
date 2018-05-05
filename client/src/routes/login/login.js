import React from 'react';
import { Link } from 'react-router-dom';
import Bows from 'bows';
import get from 'lodash/get';
import {
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import {
  Formik,
  Form,
} from 'formik';
import FieldSelect from 'components/fieldSelect';

import Layout from './../home/layout';
import { CircleLoading } from 'components/loading';
import style from './style.scss';

const log = Bows('Login view');


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { staff } = this.props;
    if (!staff || !staff.length) {
      this.props.fetchStaff();
    }
  }

  handleSubmit(values) {
    const staffMember = this.props.selectStaffMember(values.id);
    log('Logging in');
    this.props.loginSession(staffMember).then((session) => {
      log('Logged in:', session);
      this.props.history.push('/account');
    });
  }

  render() {
    const {
      staff,
      isFetching,
      session,
    } = this.props;

    const optionsStaff = staff.map(s => ({
      value: s.id,
      label: `${s.first} ${s.last}`,
    })).filter((a) => {
      return a.label.includes('(');
    });

    return (
      <Layout>
        <Container>
          <Row>
            <Col sm={{size: 8, offset: 2}}>
              <div className={style.loginContainer}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <div className={`alert alert-info mb-4 ${style.alert}`} role="alert">
                  There is no need to supply your own login credentials as this is a demo site.
                </div>

                <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>


                {isFetching !== false ?
                  <CircleLoading /> :
                  staff && staff.length ?
                    <Formik
                      initialValues={{ id: get(session, 'id') }}
                      onSubmit={(values) => this.handleSubmit(values)}
                      render={({values, setFieldValue, setFieldTouched, isSubmitting}) => (
                        <Form>
                          <FormGroup row className="mb-4">
                            <Col md={12} lg={6}>
                              <Label htmlFor="subCategory">Select a user</Label>
                              <FieldSelect name="id"
                                           options={optionsStaff}
                                           clearable={false}
                                           onChange={setFieldValue}
                                           onBlur={setFieldTouched}
                                           value={values.id}
                                           placeholder="Select ..."
                                           autoFocus={true}
                              />
                            </Col>
                          </FormGroup>

                          <Button type="submit" color="primary" disabled={isSubmitting || !values.id}>
                            {isSubmitting ? 'Logging in...' : 'Log in'}
                          </Button>
                        </Form>
                      )}
                    /> :
                    <p>No staff</p>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Login;
