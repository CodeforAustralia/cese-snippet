import React from 'react';
import { storiesOf } from '@storybook/react';

import IndexedFieldPart from './index';


storiesOf('Indexed Part Layout', module)

  .add('should render correctly', () => {
    return (
      <IndexedFieldPart index={10} totalIndex={10}>[Field]</IndexedFieldPart>
    )
  })

  .add('should render in groups correctly', () => {
    return (
      <div>
        <IndexedFieldPart index={8} totalIndex={10}>[Field]</IndexedFieldPart>
        <IndexedFieldPart index={9} totalIndex={10}>[Field]</IndexedFieldPart>
        <IndexedFieldPart index={10} totalIndex={10}>[Field]</IndexedFieldPart>
      </div>
    )
  })

;
