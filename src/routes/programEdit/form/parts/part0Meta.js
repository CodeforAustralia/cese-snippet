import React from 'react';
import FieldTextInput from 'components/fieldTextInput';

const Part0Meta = ({ isEdit }) => {

  if (isEdit) {
    return (
      <div>
        <FieldTextInput name="id" disabled={true} hidden />
        <FieldTextInput name="updatedBy" disabled={true} hidden />
      </div>
    )
  }
  return (
    <FieldTextInput name="createdBy" disabled={true} hidden />
  )
};

export default Part0Meta;
