import React from 'react';
import {
  Row,
  Col,
  Button,
  CardColumns,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import { getSnippetsNewModalTo } from "helpers/url";
import SnippetCard from './../snippetCard';

import style from './style.scss';


const SnippetsList = ({ snippets, program, school }) => {

  const newSnippetUrl = getSnippetsNewModalTo(program, school);

  if (!snippets.length) {
    return (
      <Row>
        <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">No Snippets yet for "{program.name}"</h5>
              <p>Was there an anecdote that you would like to share to help tell the program's story? or maybe a photo that you would like to share?</p>
              <Button color="primary" to={newSnippetUrl} tag={RRLink}>Post a Snippet</Button>
            </div>
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <div>

      <CardColumns>
        {snippets.map((s, idx) => {
          return (
            <div key={idx} className={style.snippetItem}>
              <SnippetCard snippet={s} />
            </div>
          )
        })}
      </CardColumns>

      <div className="mt-4 text-right">
        <Button to={newSnippetUrl} tag={RRLink} color="primary">Post a Snippet</Button>
      </div>

    </div>
  )
};

export default SnippetsList;
