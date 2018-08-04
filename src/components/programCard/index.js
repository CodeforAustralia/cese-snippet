import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Media,
  Button,
} from 'reactstrap';
import cx from 'classnames';
import { Link as RRLink } from 'react-router-dom';
import Bows from 'bows';

import TruncatedText from 'components/truncatedText';
import { getHumanisedMetaDescription } from 'store/programs/helpers';
import style from './style.scss';


const log = Bows('Program card');

class ProgramCard extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { snippets, fetchSnippets } = this.props;
    if (!snippets || !snippets.length) {
      log('fetching snippets');
      fetchSnippets();
    }
  }

  render() {
    const { program, snippets, filterProps } = this.props;

    const hasEdited = !!program.updatedBy;
    const metaText = getHumanisedMetaDescription(program);

    const hasNotEnteredDetails = !program.description && !metaText;

    const hasSnippets = snippets && snippets.length;

    return (
      <Card>
        <CardTitle className={style.title}>{program.name}</CardTitle>

        {hasNotEnteredDetails && <CardText className={cx(style.description, 'text-muted')}>No details yet for "{program.name}". You can help to record some of the details about this initiative.</CardText>}

        {program.description && <CardText className={style.description}>{program.description}</CardText>}

        {metaText && <p className={style.bannerMeta}>{metaText}</p>}

        <div className={style.actions}>
          <p className={style.actionTextLhs}>
            <RRLink to="/">{hasEdited ? 'Edit details >' : 'Record details +'}</RRLink>
          </p>
          {!hasNotEnteredDetails && <p className={style.actionTextRhs}>
            <RRLink to="/">View {`>`}</RRLink>
          </p>}
        </div>

        <Card body className={style.snippetCard}>
          <CardTitle className={style.snippetCardTitle}>Snippets
            {hasSnippets ?
              <Button color="primary" outline size="xs" className={style.snippetAddButton}>Post another</Button> :
              <Button color="primary" outline size="xs" className={style.snippetAddButton}>Post</Button>
            }
          </CardTitle>

          {hasSnippets ?

            <div>
              <div className={cx(
                style.snippetList,
                snippets.length && snippets.length > 2 ? style.showGradient : '',
              )}>

                {snippets.map((snippet, key) => (
                  <Media className={style.snippet} key={key}>
                    <Media body className={style.snippetBody}>
                      <Media heading className={style.snippetDescription}>
                        <TruncatedText text={snippet.description} length={100} />
                      </Media>
                    </Media>
                    {snippet.type === 'photo' &&
                    <Media right middle className={style.snippetImageRight}>
                      <img src={snippet.attachment.url} alt="Snippet thumbnail" className="media-object" width={120} height={120} />
                    </Media>
                    }
                  </Media>
                ))}

              </div>

              <div className={style.snippetListFooter}>
                <span className={style.snippetListMeta}>{snippets.length && snippets.length > 1 && `${snippets.length} Snippets`}</span>
                <RRLink to="/" className={style.snippetListMore}>More Snippets ></RRLink>
              </div>
            </div> :

            <p className="text-muted">Start recording moments <RRLink to="/">post the first Snippet</RRLink>.</p>
          }

        </Card>

      </Card>
    )
  }
}

export default ProgramCard;
