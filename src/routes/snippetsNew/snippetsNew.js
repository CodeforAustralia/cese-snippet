import React from 'react';
import {
  Badge,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import Layout from "layouts/app";
import Breadcrumb from "components/breadcrumb";
import { getSchoolProgramsUrl } from "helpers/url";
import { ComponentLoading } from "components/loading";
import Form from './form';

import style from './style.scss';


class SnippetsNew extends React.Component {

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      schoolCode,
      year,
      programs,
      isFetchingPrograms,
      fetchProgramsByFilter,
    } = this.props;

    if ((!programs || !programs.length) && isFetchingPrograms !== true) {
      fetchProgramsByFilter({ schoolCode, year })
    }
  }

  render() {
    const {
      schoolCode,
      year,
      programs,
      isFetchingPrograms,
      makeProgramOptions,
      history,
      onSubmit,
    } = this.props;

    const programUrl = getSchoolProgramsUrl(schoolCode, year);

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
              {isFetchingPrograms !== false ?
                <ComponentLoading /> :
                <Form optionsPrograms={makeProgramOptions(programs)}
                      schoolCode={schoolCode}
                      year={year}
                      onSubmitSuccess={() => history.push(getSchoolProgramsUrl(schoolCode, year))}
                      onSubmit={onSubmit}
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
