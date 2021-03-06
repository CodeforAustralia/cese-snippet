import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
} from 'reactstrap';

import Form from './form';
import { ComponentLoading } from "components/loading";

class QuickAddProgram extends React.Component {
  componentDidMount() {
    const {
      optionsProgramTemplates,
      fetchProgramTemplates,
      isFetchingProgramTemplates,
    } = this.props;

    if (!optionsProgramTemplates && isFetchingProgramTemplates !== true) {
      fetchProgramTemplates();
    }
  }
  render() {
    const { schoolCode, year, optionsProgramTemplates, onAddProgram,
      isFetchingProgramTemplates,
      title = 'Add another',
      onSubmitSuccess,
    } = this.props;

    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {isFetchingProgramTemplates !== false ?
            <ComponentLoading /> :
            <Form optionsPrograms={optionsProgramTemplates}
                  onSubmit={onAddProgram}
                  model={{
                    schoolCode,
                    year,
                  }}
                  onSubmitSuccess={onSubmitSuccess}
            />
          }
        </CardHeader>
      </Card>
    )
  }
}

export default QuickAddProgram;
