import React from 'react';
import {
  Badge,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import Bows from 'bows';

import Layout from "layouts/app";
import Breadcrumb from "components/breadcrumb";
import { getSchoolProgramsUrl } from "helpers/url";
import { ComponentLoading } from "components/loading";
import Form from './form';
import { makeProgramOptions } from 'store/programs/helpers';

import style from './style.scss';


const log = Bows('V: SnippetsNew');

class SnippetsNew extends React.Component {

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      schoolCode,
      school,
      isFetchingSchool,
    } = this.props;

    if (!school && isFetchingSchool !== true) {
      log('fetching school');
      this.props.fetchSchool(schoolCode);
    }
  }

  fetchOnceAfterSchool() {
    const {
      school,
      programs,
      isFetchingPrograms,
    } = this.props;

    if ((!programs || !programs.length) && isFetchingPrograms !== true) {
      log('fetching programs');
      this.props.fetchProgramsByFilter({schoolCode: school.code, year: '2018'});
    }
  }

  componentDidUpdate() {
    const {
      school,
      isFetchingSchool,
    } = this.props;

    if (school && isFetchingSchool === false) {
      this.fetchOnceAfterSchool();
    }
  }

  render() {
    const {
      school,
      isFetchingSchool,
      programs,
      isFetchingPrograms,
      history,
      onSubmit,
      year,
    } = this.props;

    const programUrl = school ? getSchoolProgramsUrl(school.code, year) : '';

    return (
      <Layout>
        <Breadcrumb items={[
          { label: 'Programs', to: programUrl },
          { label: 'New Snippet' },
        ]} />

        <div>
          <h1 className="mb-4">New Snippet</h1>

          <p className="mb-4">Tell us something amazing that happened in this program.</p>

          <div className="card">
            <div className="card-header">
              <Nav pills className="card-header-pills">
                <NavItem>
                  <NavLink tag={RRLink} to="#" className={style.altActiveStyle} active>Photo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRLink} to="#" disabled>Worksheet <sup><Badge>Beta</Badge></sup></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRLink} to="#" disabled>Applaud <sup><Badge>Beta</Badge></sup></NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="card-body">
              {isFetchingPrograms !== false && isFetchingSchool !== false ?
                <ComponentLoading /> :
                <Form optionsPrograms={makeProgramOptions(programs)}
                  optionsSchools={[
                    { value: school.code, label: school.name }
                  ]}
                  model={{
                    schoolCode: school.code,
                    year,
                  }}
                  onSubmit={onSubmit}
                  onSubmitSuccess={() => history.push(getSchoolProgramsUrl(school.code, year))}
                />
              }
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default SnippetsNew;



