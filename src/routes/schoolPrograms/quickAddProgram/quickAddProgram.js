import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
} from 'reactstrap';

import Form from './form';

const QuickAddProgram = ({ schoolCode, year, optionsProgramTemplates, onAddProgram }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add another</CardTitle>
        <Form optionsPrograms={optionsProgramTemplates}
              onSubmit={onAddProgram}
              model={{
                schoolCode,
                year,
              }}
        />
      </CardHeader>
    </Card>
  )
};

export default QuickAddProgram;
