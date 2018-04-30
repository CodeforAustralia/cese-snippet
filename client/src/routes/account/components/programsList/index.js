import React from 'react';
import {
  Link as RRLink,
  NavLink as RRNavLink,
} from 'react-router-dom';
import {
  Button,
  Badge,
  CardColumns,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import cx from 'classnames';

import TruncatedText from 'components/truncatedText';
import { commarise } from 'helpers/textFormats';
import {
  getCreateProgramModalUrl,
  getProgramUrl,
} from "helpers/url";
import {
  getIsCurrent,
  getIsNew,
} from 'store/programs/helpers';
import style from './style.scss';


const sortByNewest = (programs) => {
  return programs.sort((a, b) => {
    return new Date(a.createdAt) < new Date(b.createdAt);
  });
};

const EmptyItem = ({ activeYear }) => {
  return (
    <Card className={style.emptyProgram}>
      <CardBody>
        <CardTitle className={style.emptyProgamTitle}>There are no Programs for {activeYear}</CardTitle>
        <CardSubtitle className={style.emptyProgamSubTitle}>If you know details of any Program <br/>it's easy to create one!</CardSubtitle>
        <CardText>
          <p className={cx('font-weight-light text-muted', style.emptyProgramHelpText)}>Worried that you might be missing information about the Program? Don't worry, any staff member from your school will be able to edit after the Program is added.</p>
        </CardText>
        <Button color="primary" to={getCreateProgramModalUrl({year: activeYear})} tag={RRLink}>Add a New Program</Button>
      </CardBody>
    </Card>
  );
};


const CardMetaText = ({ yearLevels,
                        participantGroups,
                        focusGroup = null,
                        focusGroupOther = null,
                        externalProvider = null,
}) => {
  let str = 'For ' + commarise(participantGroups);

  if (focusGroup) { // todo - check
    str += ', focusing on ' + focusGroup;

    if (focusGroupOther) {
      str += 'and ' + focusGroupOther;
    }
  }

  if (externalProvider) {
    str += ' with ' + externalProvider;
  }

  if (yearLevels.length > 1) {
    str += ' in Years ' + commarise(yearLevels);
  } else {
    str += ' in Year ' + yearLevels[0];
  }

  return str;
};


const ProgramsList = ({ programs, openAddProgram, activeYear }) => {

  if (!programs.length) {
    return <EmptyItem openAddProgram={openAddProgram} activeYear={activeYear} />
  }

  return (
    <CardColumns>
      {sortByNewest(programs).map((program, idx) => {

        const isNew = getIsNew(program);

        const isCurrent = getIsCurrent(program);

        return (
          <Card key={idx} className={cx(
            style.programCard,
            isNew ? `element-animated ${style.newTransition}` : null
          )}>

            <CardBody>
              {isCurrent ?
                <div className="mb-3">
                  <Badge color="info" pill>Active</Badge>
                </div> :
                null
              }

              <CardSubtitle className={cx(style.cardSubtitle, 'mb-3')}>{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</CardSubtitle>

              <CardTitle><RRNavLink to={getProgramUrl(program.id)}>{program.name}</RRNavLink></CardTitle>

              <CardText>
                <p className={cx(style.programDescriptionText, 'mb-0')}><TruncatedText text={program.description} length={160} /></p>
              </CardText>

            </CardBody>

            <CardBody className={style.programMeta}>
              <CardText>
                <CardMetaText yearLevels={program.yearLevels}
                              focusGroup={program.focusGroup}
                              focusGroupOther={program.focusGroupOther}
                              externalProvider={program.externalProvider}
                              participantGroups={program.participantGroups}
                />
              </CardText>
            </CardBody>

            <CardBody className={style.programActions}>
              <CardLink to={getCreateProgramModalUrl(program)} color="secondary" tag={RRLink}>Edit</CardLink>
              <CardLink to={getProgramUrl(program.id)} color="secondary" tag={RRNavLink} className="float-right" alt="Read more">{`>`}</CardLink>
            </CardBody>

          </Card>
        )
      })}
    </CardColumns>
  );

};

export default ProgramsList;
