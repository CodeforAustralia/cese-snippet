import React from 'react';
import { storiesOf } from '@storybook/react';

import AdditionalFormGroup from './index';


storiesOf('Additional form group', module)

  .add('should render correctly', () => {
    return (
      <AdditionalFormGroup title="Toggle">
        Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. Nihil
        anim keffiyeh helvetica, craft beer labore wes anderson cred
        nesciunt sapiente ea proident.
      </AdditionalFormGroup>
    )
  })

;
