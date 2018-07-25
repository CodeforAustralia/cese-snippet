import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Media,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import style from './style.scss';

const ProgramCard = ({ program, snippets = null }) => {

  return (
    <Card>
      <CardTitle className={style.title}>{program.name}</CardTitle>
      {program.description && <CardText className={style.description}>{program.description}</CardText>}

      <p className={style.bannerMeta}>For Students focusing on Literacy in Years K, 1, 2, 3, 4, 5, 6.</p>

      <div className={style.actions}>
        <p className={style.actionTextLhs}>
          <RRLink to="/">Edit details</RRLink>
        </p>
        <p className={style.actionTextRhs}>
          <RRLink to="/">View {`>`}</RRLink>
        </p>
      </div>

      <Card body className={style.snippetCard}>
        <CardTitle className={style.snippetCardTitle}>Snippets
          <Button color="primary" outline size="xs" className={style.snippetAddButton}>Share another</Button>
        </CardTitle>

        <div className={style.snippetList}>

          <Media className={style.snippet}>
            <Media body className={style.snippetBody}>
              <Media heading className={style.snippetDescription}>
                Cras sit amet nibh gravida nullaras sit libero, in amet nibh libero, in gravida nulla. Cras sit amet nibh libero.
              </Media>
            </Media>
            <Media right middle className={style.snippetImageRight}>
              <img src="https://picsum.photos/120/120/?random" alt="Generic placeholder image" className="media-object" width={120} height={120} />
            </Media>
          </Media>

          <Media className={style.snippet}>
            <Media body className={style.snippetBody}>
              <Media heading className={style.snippetDescription}>
                Donec lacinia congue felis in faucibus. Donec lacinia congue felis in faucibus ads.
              </Media>
            </Media>
          </Media>

          <Media className={style.snippet}>
            <Media body className={style.snippetBody}>
              <Media heading className={style.snippetDescription}>
                Donec lacinia congue felis in faucibus. Donec lacinia congue felis in faucibus. Donec laci.
              </Media>
            </Media>
            <Media right middle className={style.snippetImageRight}>
              <img src="https://picsum.photos/120/120/?random" alt="Generic placeholder image" className="media-object" width={120} height={120} />
            </Media>
          </Media>

        </div>

        <div className={style.snippetListMore}><RRLink to="/">More Snippets ></RRLink></div>

      </Card>

    </Card>
  )
};

export default ProgramCard;
