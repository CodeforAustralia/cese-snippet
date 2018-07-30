import React from 'react';
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label,
} from 'reactstrap';

const QuickAddProgramForm = () => {
  return (
    <div>
      <FormGroup>
        <Label className="h5">Enter program name</Label>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            <Button>Add</Button>
          </FormGroup>
        </Form>
      </FormGroup>
    </div>

  )
};

export default QuickAddProgramForm;



// input + button
//
// input:hidden code
// input:hidden year
