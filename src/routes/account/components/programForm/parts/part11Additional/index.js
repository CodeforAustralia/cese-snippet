import React from 'react'

import IndexedPartLayout from './../../indexedPartLayout';
import AdditionalFormGroup from './../../additionalFormGroup';


const Part11Additional = ({ index, totalIndex, }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <AdditionalFormGroup title="School Excellence Framework (SEF)">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Cost">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Website and Contact Details">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Additional Program Details">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="📎 Attach resources or materials">
          <div>[field]</div>
        </AdditionalFormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part11Additional;
