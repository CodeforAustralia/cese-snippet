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
import { ComponentLoading } from 'components/loading';
import {
  getProgramUrl,
  getProgramEditUrl,
  getProgramSnippetsUrl,
  getSnippetsNewModalTo,
} from 'helpers/url';

import style from './style.scss';


const log = Bows('C: Program card');


// {snippetsIsFetching !== false ?
//   <p>Loading...</p> :
//   hasSnippets ?
//     <p>HAS</p> :
//     <p>No snippets</p>
// }

class ProgramCard extends React.Component {

  componentDidMount() {
    // console.log(this.props.program.id)
    this.fetchData();
  }

  // componentDidUpdate() {
  //   const { isFetchingSnippetsByFilter } = this.props;
  //   if (isFetchingSnippetsByFilter !== true) {
  //     this.fetchData();
  //   }
  // }

  fetchData() {
    const { snippets, fetchSnippets, isFetchingSnippetsByFilter, program, filterProps } = this.props;
    if (!snippets || !snippets.length && isFetchingSnippetsByFilter !== true) {
      log('fetching snippets');
      // log(filterProps);
      // log(program.id)
      fetchSnippets(filterProps);
    }

    // if (program.id >= '10') {
    //   console.log('filterProps', JSON.stringify(filterProps));
    //   console.log('snippets', JSON.stringify(snippets));
    //   console.log('isFetchingSnippetsByFilter', JSON.stringify(isFetchingSnippetsByFilter));
    //   // debugger
    // }
  }

  render() {
    const {
      school,
      program,
      snippets,
      isFetchingSnippetsByFilter,
    } = this.props;

    const hasEdited = !!program.updatedBy;
    const metaText = getHumanisedMetaDescription(program);

    const hasNotEnteredDetails = !program.description && !metaText;

    const hasSnippets = snippets && snippets.length;

    const programUrl = getProgramUrl(program.id);
    const programEditUrl = getProgramEditUrl(program.id);
    const programSnippetsUrl = getProgramSnippetsUrl(program.id);
    const snippetModalUrl = getSnippetsNewModalTo(program, school);

    return (
      <Card>
        <CardTitle className={style.title}>{program.name}</CardTitle>

        {hasNotEnteredDetails && <CardText className={cx(style.description, 'text-muted')}>No details yet for "{program.name}". You can help to record some of the details about this initiative.</CardText>}

        {program.description && <CardText className={style.description}>{program.description}</CardText>}

        {metaText && <p className={style.bannerMeta}>{metaText}</p>}

        <div className={style.actions}>
          <p className={style.actionTextLhs}>
            <RRLink to={programEditUrl}>{hasEdited ? 'Edit details >' : 'Record details +'}</RRLink>
          </p>
          {!hasNotEnteredDetails && <p className={style.actionTextRhs}>
            <RRLink to={programUrl}>View {`>`}</RRLink>
          </p>}
        </div>

        <Card body className={style.snippetCard}>
          <CardTitle className={style.snippetCardTitle}>Snippets
            {isFetchingSnippetsByFilter !== false ?
              null :
              hasSnippets ?
                <Button color="primary" outline size="xs" className={style.snippetAddButton} tag={RRLink} to={snippetModalUrl}>Post another</Button> :
                <Button color="primary" outline size="xs" className={style.snippetAddButton} tag={RRLink} to={snippetModalUrl}>Post</Button>
            }
          </CardTitle>


          {isFetchingSnippetsByFilter !== false ?

            // LOADING

            <ComponentLoading small={true} /> :

            // LOADED

            hasSnippets ?

              // SNIPPETS

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
                  <RRLink to={programSnippetsUrl} className={style.snippetListMore}>More Snippets ></RRLink>
                </div>
              </div>

              :

              // NO SNIPPETS

              <p className="text-muted">Start recording moments <RRLink to={snippetModalUrl}>post the first Snippet</RRLink>.</p>
          }

        </Card>

      </Card>
    )
  }
}

export default ProgramCard;
