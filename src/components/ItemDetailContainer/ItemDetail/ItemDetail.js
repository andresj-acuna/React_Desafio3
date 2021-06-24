import React from "react";
import { Card, Image } from "semantic-ui-react";

export const ItemDetail = ({ dataShow }) => {
  return (
    <>
      {dataShow.map((element) => (
        <Card key={element.id}>
          <Image src={element.imageUrl} width="5" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{element.title}</Card.Header>

            <Card.Description>
              <p>$ {element.price}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
