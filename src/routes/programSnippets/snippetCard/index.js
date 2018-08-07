import React from 'react';
import get from 'lodash/get';
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  // Media,
  // Button,
} from 'reactstrap';

const SnippetCard = ({ snippet }) => {

  const imgSrc = get(snippet, 'attachment.url', null);

  return (
    <Card>
      {imgSrc ?
        <CardImg top width="100%" src={imgSrc} alt={snippet.attachment.filename} /> :
        null
      }
      <CardBody>
        <CardTitle>Snippet</CardTitle>
        <CardText>{snippet.description}</CardText>
      </CardBody>
    </Card>
  )
};

export default SnippetCard;
