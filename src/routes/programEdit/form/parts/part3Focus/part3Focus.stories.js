import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part3Focus from './index';

const formMock = {
  values: {
    category: null,
    subCategory: null,
  },
  errors: {},
  touched: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 3 - Focus', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part3Focus index="3" totalIndex="10"
                  values={formMock.values}
                  errors={formMock.errors}
                  touched={formMock.touched}
                  setFieldValue={formMock.setFieldValue}
                  setFieldTouched={formMock.setFieldTouched}
                  optionsCategories={[
                    {
                      "value": "Curriculum Engagement",
                      "label": "Curriculum Engagement",
                      "description": "Speciess congregabo in lutetia.",
                      "categories": [
                        { "value": "Literacy", "label": "Literacy" },
                        { "value": "Numeracy", "label": "Numeracy" },
                        { "value": "PDHPE", "label": "PDHPE" },
                        { "value": "Science", "label": "Science" },
                        { "value": "HSIE", "label": "HSIE" },
                        { "value": "Technology", "label": "Technology" },
                        { "value": "Creative Arts", "label": "Creative Arts" },
                        { "value": "Languages", "label": "Languages" }
                      ]
                    },
                    {
                      "value": "Student Wellbeing and Support",
                      "label": "Student Wellbeing and Support",
                      "description": null,
                      "categories": [
                        { "value": "Student Participation", "label": "Student Participation" },
                        { "value": "Social and Emotional Learning", "label": "Social and Emotional Learning" },
                        { "value": "Student Support", "label": "Student Support" }
                      ]
                    },
                    {
                      "value": "Extra-Curricular",
                      "label": "Extra-Curricular",
                      "description": null,
                      "categories": [
                        { "value": "Creative and Performing Arts", "label": "Creative and Performing Arts" },
                        { "value": "Interest Groups", "label": "Interest Groups" },
                        { "value": "Interest", "label": "Interest" },
                        { "value": "Environmental Initiative", "label": "Environmental Initiative" },
                        { "value": "Physical Fitness", "label": "Physical Fitness" },
                        { "value": "Student Enrichment and Leadership", "label": "Student Enrichment and Leadership" },
                        { "value": "Technology", "label": "Technology" }
                      ]
                    },
                    {
                      "value": "Parent and Community Engagement",
                      "label": "Parent and Community Engagement",
                      "description": null,
                      "categories": [
                        { "value": "Parent Participation", "label": "Parent Participation" },
                        { "value": "Contributing to the Community", "label": "Contributing to the Community" }
                      ]
                    }
                  ]}
      />
    )
  })

;
