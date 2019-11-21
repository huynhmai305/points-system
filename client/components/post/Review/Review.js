import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

const CardComponent = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        </CardBody>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>

  );
};

export default CardComponent;
