import React from 'react';
import {
  Link as RRLink,
  NavLink as RRNavLink,
} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import cx from 'classnames';

import TruncatedText from 'components/truncatedText';
import {
  getCreateProgramModalUrl,
  getProgramUrl,
} from "helpers/url";
import {
  getIsNew,
  getHumanisedMetaDescription,
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
        <CardTitle className={style.emptyProgamTitle}>There are no programs for "{activeYear}"</CardTitle>
        <CardSubtitle className={style.emptyProgamSubTitle}>If you know details of any program <br/>it's easy to create one!</CardSubtitle>
        <CardText className={cx('font-weight-light text-muted mb-4', style.emptyProgramHelpText)}>
          Worried that you might be missing information about the program? Don't worry, any staff member from your school will be able to edit after the Program is added.
        </CardText>
        <Button color="primary" to={getCreateProgramModalUrl({year: activeYear})} tag={RRLink}>Add a New Program</Button>
      </CardBody>
    </Card>
  );
};



const ProgramsList = ({ programs, openAddProgram, activeYear }) => {

  if (!programs.length) {
    return <EmptyItem openAddProgram={openAddProgram} activeYear={activeYear} />
  }

  return sortByNewest(programs).map((program, idx) => {
    const isNew = getIsNew(program);
    const metaDescription = getHumanisedMetaDescription(program);

    return (
      <Card key={idx} className={cx(
        style.programCard,
        isNew ? `element-animated ${style.newTransition}` : null
      )}>
        <CardBody>
          {/*{isCurrent ?*/}
            {/*<div className="mb-3">*/}
              {/*<Badge color="info" pill>Active</Badge>*/}
            {/*</div> :*/}
            {/*null*/}
          {/*}*/}

          <CardSubtitle className={cx(style.cardSubtitle, 'mb-3')}>{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</CardSubtitle>

          <CardTitle><RRNavLink to={getProgramUrl(program.id)}>{program.name}</RRNavLink></CardTitle>

          <CardText className={cx(style.programDescriptionText, 'mb-0')}>
            {program.description && <TruncatedText text={program.description} length={160} />}
          </CardText>

        </CardBody>

        <CardBody className={style.programMeta}>
          <CardText>
            {metaDescription}
          </CardText>
        </CardBody>

        <CardBody className={style.programActions}>
          <CardLink to={getCreateProgramModalUrl(program)} color="secondary" tag={RRLink}>Edit</CardLink>
          <CardLink to={getProgramUrl(program.id)} color="secondary" tag={RRNavLink} className="float-right" alt="Read more">{`>`}</CardLink>
        </CardBody>

      </Card>
    )
  });

};

export default ProgramsList;
