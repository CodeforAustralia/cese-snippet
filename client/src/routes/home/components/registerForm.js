import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';


class RegisterForm extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Join the Snippet community</CardTitle>
          <CardText>Register your interest in Snippet's Alpha program and we'll keep you updated.</CardText>
          <FormGroup>
            <Label for="exampleEmail">Your name</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Your email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Your school</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>

          <Button color="pink" outline tag={RRLink} to="/login" className="mt-2">Register for updates</Button>
        </CardBody>
      </Card>
    )
  }
}

export default RegisterForm;
