import React from 'react';
import Bows from 'bows';
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  Link as RRLink,
} from 'react-router-dom';
// import cx from 'classnames';

import Layout from 'layouts/app';
import Breadcrumb from 'components/breadcrumb';
import { PageLoading } from "components/loading";
import {
  getProgramUrl,
  getSchoolProgramsUrl,
} from "helpers/url";
// import {
//   getHumanRelativeDate,
//   getShortDate,
// } from 'helpers/dateFormats';
import SnippetsList from './snippetsList';

import style from './../program/style.scss';


const log = Bows('V: Snippets');

class Program extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      program,
      isFetchingProgram,
    } = this.props;

    if (!program && isFetchingProgram !== true) {
      log('fetching program');
      this.props.fetchProgram();
    }
  }

  fetchOnceAfterProgram() {
    const {
      program,
      school,
      isFetchingSchool,
      snippets,
      isFetchingSnippets,
    } = this.props;
    if (!school && isFetchingSchool !== true) {
      log('fetching school');
      this.props.fetchSchool(program.schoolCode);
    }
    if ((!snippets || !snippets.length) && isFetchingSnippets !== true) {
      log('fetching snippets');
      this.props.fetchSnippets(this.props.snippetFilterProps);
    }
  }

  componentDidUpdate(prevProps) {
    const loadedSchools = this.props.school && this.props.isFetchingSchool === false;
    const loadedSnippets = this.props.snippets && this.props.isFetchingSnippets === false;
    if (this.props.program && !loadedSchools && !loadedSnippets) {
      this.fetchOnceAfterProgram();
    }
  }

  render() {
    const {
      program,
      isFetchingProgram,
      school,
      isFetchingSchool,
      isFetchingSnippets,
      snippets,
    } = this.props;

    if (isFetchingProgram !== false || isFetchingSchool !== false) {
      return <PageLoading />
    }

    const programUrl = getProgramUrl(program.id);

    return (
      <Layout>
        <Breadcrumb items={[
          { label: 'Programs' },
          { label: school.name, to: getSchoolProgramsUrl(program.schoolCode, program.year) },
          { label: program.name, to: programUrl },
          { label: 'Snippets' }
        ]} />


        <Row className={style.fieldSection}>
          <Col>

            {/*<p className={`mb-4 ${style.dateMeta}`}>Last updated {getHumanRelativeDate(program.updatedAt)} ago*/}
            {/*{staffUpdatedBy ? ` by ${staffUpdatedBy.first} ${staffUpdatedBy.last}` : null}*/}
            {/*{` | Added ${getShortDate(program.createdAt)}`}*/}
            {/*{staffCreatedBy ? ` by ${staffCreatedBy.first} ${staffCreatedBy.last}` : null}*/}
            {/*.*/}
            {/*</p>*/}

            <div className={style.programHeader}>
              {program.category ?
                <p className="mb-0 mt-3">{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</p> :
                null
              }
              <h1>{program.name}</h1>
            </div>
          </Col>
        </Row>

        <Nav tabs>
          <NavItem>
            <NavLink tag={RRLink} to={programUrl}>Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRLink} to="#" disabled active>Snippets {isFetchingSnippets !== false && snippets && snippets.length ? `(${snippets.length})` : ''}</NavLink>
          </NavItem>
        </Nav>

        <Row>
          <Col>

            <div className="p-4">

              {isFetchingSnippets !== false ?
                <PageLoading blocking={false} /> :
                <SnippetsList snippets={snippets} program={program} />
              }

            </div>

          </Col>

        </Row>

      </Layout>
    )
  }
}

export default Program;

