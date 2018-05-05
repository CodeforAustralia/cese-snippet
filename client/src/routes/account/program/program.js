import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Badge,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';
import Bows from 'bows';

import Breadcrumb from 'components/breadcrumb';
import { CircleLoading } from 'components/loading';
import {
  getHumanisedMetaDescription,
} from 'store/programs/helpers';
import { commarise } from 'helpers/textFormats';
import {
  getCreateProgramModalUrl,
  getSchoolProgramsUrl,
} from "helpers/url";
import {
  getHumanRelativeDate,
  getShortDate,
} from 'helpers/dateFormats';
import PillsList from 'components/pillsList';

import style from './style.scss';

const log = Bows('Program View');


class Program extends React.Component {

  componentDidMount() {
    const { program } = this.props;
    if (!program) {
      log('Fetching program');
      this.props.fetchProgram();
    }
  }

  componentWillUpdate(nextProps) {
    const { program } = this.props;
    const staffIds = this.props.getAllStaffIds(program);

    if (nextProps.program) {
      const nextStaffIds = this.props.getAllStaffIds(nextProps.program);
      if (JSON.stringify(staffIds) !== JSON.stringify(nextStaffIds)) {
        log('Fetching staff');
        this.props.fetchStaff(nextStaffIds);
      }
    }

    if (!this.props.program && nextProps.program) {
      this.props.fetchSchool(nextProps.program.code);
    }
  }

  render() {
    const {
      isFetchingProgram,
      isFetchingStaff,
      isFetchingSchool,
      program,
      programStaff,
      staffCreatedBy,
      staffUpdatedBy,
      school,
    } = this.props;

    if (isFetchingProgram !== false && isFetchingStaff !== false) {
      return <CircleLoading />
    }

    if (isFetchingSchool !== false) { // probably was loaded by parent app
      return <CircleLoading />
    }

    // const isCurrent = getIsCurrent(program);

    const editUrl = getCreateProgramModalUrl(program);

    const metaDescription = getHumanisedMetaDescription(program);

    return (
      <div>
        <Breadcrumb items={[
          { label: 'Programs', to: getSchoolProgramsUrl(program.code, program.year) },
          { label: program.name }
        ]} />

        <Row className={style.fieldSection}>
          <Col sm={{size:9}} md={{size:8}}>

            {/*{isCurrent ?*/}
              {/*<div className="mb-3">*/}
                {/*<Badge color="info" pill>Active</Badge>*/}
              {/*</div> :*/}
              {/*null*/}
            {/*}*/}

            <p className={`mb-4 ${style.dateMeta}`}>Last updated {getHumanRelativeDate(program.updatedAt)} ago
              {staffUpdatedBy ? ` by ${staffUpdatedBy.first} ${staffUpdatedBy.last}` : null}
              {` | Added ${getShortDate(program.createdAt)}`}
              {staffCreatedBy ? ` by ${staffCreatedBy.first} ${staffCreatedBy.last}` : null}
              .
            </p>

            {program.category ?
              <p>{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</p> :
              null
            }

            <span className={style.schoolName}>{school.name}</span>
            <h1 className="mb-4">{program.name}</h1>

            <div className="mb-4">
              <Button to={editUrl} tag={Link} color="light">Edit</Button>
            </div>

            <p>{program.descriptionFull || program.description}</p>

            <div className={style.itemprop}>
              <p className={style.itempropKey}>Program Audience</p>
              <p className={style.itempropValue}>{metaDescription}</p>
            </div>


          </Col>

          <Col sm={{size:3}} md={{size:4}} className={style.metaPanel}>
            <Card>
              <CardBody>
                <div className={style.itemprop}>
                  <p className={style.itempropKey}>Staff involved</p>
                  <p className={style.itempropValue}>{commarise(programStaff.map((s, idx, arr) => `${s.first} ${s.last}`))}</p>
                </div>

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

          </Col>
        </Row>



        <Row className={style.fieldSection}>
          <Col>
            <div className={style.itemprop}>
              <p className={style.itempropKey}>Aims</p>
              <p className={style.itempropValue}>{program.aims ? program.aims : '-'}</p>
            </div>
          </Col>
        </Row>


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

        <div className={style.fieldSection}>
          <Button to={editUrl} tag={Link} color="light">Edit</Button>
        </div>

      </div>
    )
  }

}

export default Program;
