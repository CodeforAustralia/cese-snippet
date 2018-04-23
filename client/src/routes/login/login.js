import React from 'react';
import { Link } from 'react-router-dom';
import Bows from 'bows';
import {
  Alert,
  Row,
  Col,
  Container,
  Button,
} from 'reactstrap';
import {
  Formik,
  Form,
} from 'formik';
import FieldSelect from 'components/fieldSelect';

import Layout from './../home/layout';
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
      this.props.history.push('/account/decision');
    });
  }

  render() {
    const {
      staff,
      isFetching,
    } = this.props;

    return (
      <Layout>
        <Container>
          <Row>
            <Col sm={{size: 6, offset: 3}} md={{size: 8, offset: 2}}>
              <div className={style.loginContainer}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>

                <Alert color="info">
                  This is a demo site, so there is no need to supply log in credentials. Select someone from the dropdown to continue with and then click "Login".
                </Alert>

                {isFetching !== false ?
                  <p>Loading ...</p> :
                  staff && staff.length ?
                    <Formik
                      initialValues={{ id: null }}
                      onSubmit={(values) => this.handleSubmit(values)}
                      render={({values, setFieldValue, setFieldTouched}) => (
                        <Form>
                          <FieldSelect name="id"
                                       options={staff.map(s => ({
                                         value: s.id,
                                         label: `${s.first} ${s.last}`,
                                       }))}
                                       onChange={setFieldValue}
                                       onBlur={setFieldTouched}
                                       value={values.id} />
                          <Button type="submit">Login</Button>
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
