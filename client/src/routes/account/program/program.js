import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Badge,
} from 'reactstrap';
import Bows from 'bows';

import Breadcrumb from 'components/breadcrumb';
import { CircleLoading } from 'components/loading';
import {
  getIsCurrent,
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
  }

  render() {
    const {
      isFetchingProgram,
      isFetchingStaff,
      program,
      programStaff,
      staffCreatedBy,
      staffUpdatedBy,
    } = this.props;

    if (isFetchingProgram !== false && isFetchingStaff !== false) {
      return <CircleLoading />
    }

    const isCurrent = getIsCurrent(program);

    const editUrl = getCreateProgramModalUrl(program);


    console.log(staffCreatedBy);

    return (
      <div>
        <Breadcrumb items={[
          { label: 'Programs', to: getSchoolProgramsUrl(program.code, program.year) },
          { label: program.name }
        ]} />

        {isCurrent ?
          <div className="mb-3">
            <Badge color="info" pill>Active</Badge>
          </div> :
          null
        }

        <p className="text-muted">Last updated {getHumanRelativeDate(program.updatedAt)} ago by {staffUpdatedBy.first} {staffUpdatedBy.last} | Added {getShortDate(program.createdAt)} by {staffCreatedBy.first} {staffCreatedBy.last}.</p>

        <h1>{program.name}</h1>

        <p>{program.description}</p>

        {/*<p className={style.itemprop}>*/}
        {/*<span className={style.itempropKey}>Long description</span>*/}
        {/*<span className={style.itempropValue}>*/}
        {/*{program.descriptionFull ? program.descriptionFull : '-'}*/}
        {/*</span>*/}
        {/*</p>*/}


        <div className={style.fieldSection}>
          <h2>What is the program and when did it happen?</h2>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Who is the program for?</span>
            <span className={style.itempropValue}>
              {program.participantGroups ? program.participantGroups : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Who in the community?</span>
            <span className={style.itempropValue}>
              {program.participantGroupsDescription ? program.participantGroupsDescription : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Does the program cater to a particular focus group?</span>
            <span className={style.itempropValue}>
              {program.focusGroup ? program.focusGroup : '-'}{program.focusGroupOther ? ` - ${program.focusGroupOther}` : null}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Number of Participants</span>
            <span className={style.itempropValue}>
              {program.cohortSize ? program.cohortSize : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>For Year Levels</span>
            <span className={style.itempropValue}>
              {program.yearLevels ? commarise(program.yearLevels) : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Terms delivered</span>
            <span className={style.itempropValue}>
              {program.terms ? commarise(program.terms) : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Year delivered</span>
            <span className={style.itempropValue}>
              {program.year ? program.year : '-'}
            </span>
          </p>
        </div>




        <div className={style.fieldSection}>
          <h2>Why did the program happen?</h2>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Program Focus Area</span>
            <span className={style.itempropValue}>
              {program.category ? program.category : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Program Category</span>
            <span className={style.itempropValue}>
              {program.subCategory ? program.subCategory : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Aims</span>
            <span className={style.itempropValue}>
              {program.aims ? program.aims : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Program Overview</span>
            <span className={style.itempropValue}>
              {program.description ? program.description : '-'}
            </span>
          </p>


        </div>





        <div className={style.fieldSection}>
          <h2>Who and how</h2>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Staff involved</span>
            <span className={style.itempropValue}>
              {program.staff ? program.staff : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Provider</span>
            <span className={style.itempropValue}>
              {program.deliveredByType ? program.deliveredByType : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Who is the External Provider?</span>
            <span className={style.itempropValue}>
              {program.externalProvider ? program.externalProvider : '-'}
            </span>
          </p>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Website</span>
            <span className={style.itempropValue}>
              {program.website ? program.website : '-'}
            </span>
          </p>
        </div>


        <div className={style.fieldSection}>
          <h2>Meta</h2>

          <p className={style.itemprop}>
            <span className={style.itempropKey}>Who</span>
            <span className={style.itempropValue}>
              {program.tags ? commarise(program.tags) : '-'}
            </span>
          </p>
        </div>


        <div className={style.fieldSection}>
          <Button to={editUrl} tag={Link} color="secondary">Edit</Button>
        </div>

      </div>
    )
  }

}

export default Program;
