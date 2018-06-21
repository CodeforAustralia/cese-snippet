import React from 'react'
import IndexedPartLayout from './../../indexedPartLayout';

const Part11Additional = ({ index, totalIndex, }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        [field]
      </div>
    </IndexedPartLayout>
  )
};

export default Part11Additional;





{/*<fieldset>*/}
{/*<FormGroup>*/}
{/*<Col md={8}>*/}
{/*<Label htmlFor="participantGroups">Who is the program for?</Label>*/}
{/*<FieldCheckboxList name="participantGroups"*/}
{/*value={values.participantGroups}*/}
{/*options={this.optionsParticipantGroups}*/}
{/*error={errors.participantGroups}*/}
{/*/>*/}
{/*</Col>*/}
{/*</FormGroup>*/}

{/*{values.participantGroups &&*/}
{/*values.participantGroups.find(group => group === 'Community') &&*/}
{/*<FormGroup row>*/}
{/*<Col md={8}>*/}
{/*<Label htmlFor="participantGroupsDescription">Who in the community?</Label>*/}
{/*<FieldTextInput name="participantGroupsDescription"*/}
{/*error={errors.participantGroupsDescription}*/}
{/*/>*/}
{/*<FormText color="muted">*/}
{/*Example: Partner schools students, charities, aged care residents*/}
{/*</FormText>*/}
{/*</Col>*/}
{/*</FormGroup>*/}
{/*}*/}







{/*</fieldset>*/}


{/*<fieldset className={style.fieldset} id="step-3">*/}

{/*{!values.descriptionFull && showDescriptionFull === false && <p><Button color="link" onClick={() => this.setState({showDescriptionFull: true})} className={`${style.formTextBtn} pl-0`}>Would you like to add more Program information?</Button></p>}*/}

{/*{values.descriptionFull || showDescriptionFull === true ?*/}
{/*<FormGroup row>*/}
{/*<Col md={8}>*/}
{/*<Label htmlFor="descriptionFull">Detailed description</Label>*/}
{/*<FieldTextareaInput name="descriptionFull"*/}
{/*rows={6}*/}
{/*error={errors.descriptionFull}*/}
{/*/>*/}
{/*<FormText color="muted">*/}
{/*A comprehensive full length description of the program. Describe the structure of the program, and how*/}
{/*it is delivered.*/}
{/*</FormText>*/}
{/*</Col>*/}
{/*</FormGroup> : null}*/}

{/*<FormGroup row>*/}
{/*<Col md={8}>*/}
{/*<Label htmlFor="website">Website</Label>*/}
{/*<FieldUrlInput name="website"*/}
{/*error={errors.website}*/}
{/*/>*/}
{/*<FormText color="muted">*/}
{/*Some programs have a website for more information.*/}
{/*</FormText>*/}
{/*</Col>*/}
{/*</FormGroup>*/}

{/*</fieldset>*/}


{/*<fieldset className={style.fieldset} id="step-4">*/}
{/*<legend>Other</legend>*/}

{/*<FormGroup row>*/}
{/*<Col md={8}>*/}
{/*<Label htmlFor="tags">Keywords</Label>*/}
{/*<FieldSelectTags name="tags"*/}
{/*options={this.optionsTags}*/}
{/*value={values.tags}*/}
{/*onChange={this.props.setFieldValue}*/}
{/*onBlur={this.props.setFieldTouched}*/}
{/*touched={touched.tags}*/}
{/*error={errors.tags}*/}
{/*/>*/}
{/*<FormText color="muted">*/}
{/*Keywords could help others to search for programs like this one in the future.*/}
{/*</FormText>*/}
{/*</Col>*/}
{/*</FormGroup>*/}

{/*</fieldset>*/}
