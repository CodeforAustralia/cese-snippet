import React from 'react';
import Bows from 'bows';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  Link as RRLink,
} from 'react-router-dom';
import cx from 'classnames';

import Layout from 'layouts/app';
import Breadcrumb from 'components/breadcrumb';
import { PageLoading } from "components/loading";
import {
  getHumanisedMetaDescription,
} from 'store/programs/helpers';
import {
  getSchoolProgramsUrl,
  getProgramEditUrl,
  getProgramSnippetsUrl,
} from "helpers/url";
// import {
//   getHumanRelativeDate,
//   getShortDate,
// } from 'helpers/dateFormats';
import { commarise } from 'helpers/textFormats';
import PillsList from 'components/pillsList';

import style from './style.scss';


const log = Bows('V: Program');

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
    } = this.props;
    if (!school && isFetchingSchool !== true) {
      log('fetching school');
      this.props.fetchSchool(program.schoolCode);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.program && !this.props.school) {
      this.fetchOnceAfterProgram();
    }
  }

  render() {
    const {
      program,
      isFetchingProgram,
      school,
      isFetchingSchool,
    } = this.props;

    if (isFetchingProgram !== false || isFetchingSchool !== false) {
      return <PageLoading />
    }

    const editUrl = getProgramEditUrl(program.id);
    const snippetsUrl = getProgramSnippetsUrl(program.id);
    const metaDescription = getHumanisedMetaDescription(program);

    return (
      <Layout>
        <Breadcrumb items={[
          { label: 'Programs' },
          { label: school.name, to: getSchoolProgramsUrl(program.schoolCode, program.year) },
          { label: program.name }
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
            <NavLink active disabled to="#" tag={RRLink}>Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRLink} to={snippetsUrl}>Snippets</NavLink>
          </NavItem>
        </Nav>

        <Row>
          <Col xs={{size:12}} sm={{size:9}} md={{size:8}}>

            <div className="p-4">
              <div className="mb-4">
                <Button to={editUrl} tag={RRLink} color="light">Edit</Button>
              </div>

              <p>{program.descriptionFull || program.description}</p>

              <div className={style.itemprop}>
                <p className={style.itempropKey}>Program Audience</p>
                <p className={style.itempropValue}>{metaDescription}</p>
              </div>

              <div className={style.itemprop}>
                <p className={style.itempropKey}>Aims</p>
                <p className={style.itempropValue}>{program.aims ? program.aims : '-'}</p>
              </div>

              {program.externalProvider ?
                <Row className={style.fieldSection}>
                  <Col sm={{size:6}}>

                    <p className={style.itemprop}>
                      <span className={style.itempropKey}>Who is the External Provider?</span>
                      <span className={style.itempropValue}>
            {program.externalProvider ? program.externalProvider : '-'}
          </span>
                    </p>

                    <div className={style.itemprop}>
                      <p className={style.itempropKey}>Website</p>
                      <p className={style.itempropValue}>{program.website ? program.website : '-'}</p>
                    </div>
                  </Col>

                  <Col sm={{size:6}}>

                  </Col>
                </Row> :
                null
              }

              <div className={cx(style.fieldSection, 'mt-4')}>
                <Button to={editUrl} tag={RRLink} color="light">Edit</Button>
              </div>

            </div>

          </Col>

          <Col xs={{size:12}} sm={{size:3}} md={{size:4}} className={style.metaPanel}>
            <div className="p-4">

              <Card className={style.metaPanelCard}>
                <CardBody className={style.metaPanelCardBody}>
                  {/*<div className={style.itemprop}>*/}
                    {/*<p className={style.itempropKey}>Staff involved</p>*/}
                    {/*<p className={style.itempropValue}>{commarise(programStaff.map((s, idx, arr) => `${s.first} ${s.last}`))}</p>*/}
                  {/*</div>*/}

                  <div className={style.itemprop}>
                    <p className={style.itempropKey}>Run by</p>
                    <p className={style.itempropValue}>{program.deliveredByType ? program.deliveredByType : '-'}</p>
                  </div>

                  <div className={style.itemprop}>
                    <p className={style.itempropKey}>Number of participants</p>
                    <p className={style.itempropValue}>{program.cohortSize ? program.cohortSize : '-'}</p>
                  </div>

                  <div className={style.itemprop}>
                    <p className={style.itempropKey}>Available in</p>
                    <p className={style.itempropValue}>{program.terms ? `Terms ${commarise(program.terms)}` : '-'}</p>
                  </div>

                  <div className={style.itemprop}>
                    <p className={style.itempropKey}>Keywords</p>
                    <p className={style.itempropValue}>
                      {program.tags ? <PillsList list={program.tags} /> : '-'}
                    </p>
                  </div>
                </CardBody>
              </Card>

            </div>

          </Col>

        </Row>

      </Layout>
    )
  }
}

export default Program;
