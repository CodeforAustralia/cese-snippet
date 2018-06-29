import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormFeedback,
} from 'reactstrap';
import FieldSelect from 'components/fieldSelect';
import IndexedPartLayout from './../../indexedPartLayout';
import { getSchoolsOptions } from 'store/cms/helpers';
import FieldTextInput from "components/fieldTextInput/index";


class Part1School extends React.Component {
  componentDidMount() {
    if (!this.props.userSchools) {
      this.fetchInitialData();
    }
  }
  fetchInitialData() {
    this.props.fetchSchools();
  }
  render() {
    const {
      index,
      totalIndex,
      values,
      errors,
      touched,
      setFieldValue,
      setFieldTouched,
      disabled = false,
      isFetchingUserSchools,
      userSchools,
    } = this.props;

    let school = null;
    if (values.code) {
      school = userSchools[values.code];
    }

    const optionsSchools = getSchoolsOptions(userSchools);

    return (
      <IndexedPartLayout index={index} totalIndex={totalIndex}>
        <div>
          <FormGroup row>
            <Col md={8}>
              <Label htmlFor="code">School</Label>
              {school ?
                <p>{school.name}</p> :

                optionsSchools.length === 1 ?

                  <FieldSelect name="code"
                               value={optionsSchools[0].value}
                               options={optionsSchools}
                               searchable={false}
                               disabled={true}
                               clearable={false}
                               onChange={setFieldValue}
                               onBlur={setFieldTouched}
                               arrowRenderer={() => null}
                  /> :

                  <FieldSelect name="code"
                             value={values.code}
                             options={getSchoolsOptions(userSchools)}
                             onChange={setFieldValue}
                             onBlur={setFieldTouched}
                             error={errors.code}
                             className={errors.code && 'is-invalid'}
                             placeholder="Select …"
                             searchable={false}
                             disabled={isFetchingUserSchools || disabled}
                             touched={touched.code}
                />
              }
              {errors.code && <FormFeedback style={{display:'block'}}>{errors.code}</FormFeedback>}
            </Col>
          </FormGroup>
        </div>
      </IndexedPartLayout>
    )
  }
}

export default Part1School;
