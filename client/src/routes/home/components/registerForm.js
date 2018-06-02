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


class RegisterForm extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Join the Snippet community</CardTitle>
          <CardText>Register your interest in Snippet's Alpha program and we'll keep you updated.</CardText>

          <form action="https://firebaseapp.us18.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="ad768dec01d640073ba9f8580" />
            <input type="hidden" name="id" value="37030466bc" />

            <FormGroup>
              <Label for="name">Your name</Label>
              <Input type="text" name="MERGE1" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Your email</Label>
              <Input type="email" name="MERGE0" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="school">Your school</Label>
              <Input type="text" name="MERGE2" id="school" />
            </FormGroup>

            <FormGroup>
              <Label>Check if you are interested to be a pilot school</Label>
              <FormGroup check>
                <Label check for="group_1">
                  <Input type="checkbox" id="group_1" name="group[1125][1]" />{' '}
                  Yes, register interest
                </Label>
              </FormGroup>
            </FormGroup>

            <Button type="submit" color="pink" outline className="mt-2">Register for updates</Button>
          </form>

        </CardBody>
      </Card>
    )
  }
}

export default RegisterForm;


