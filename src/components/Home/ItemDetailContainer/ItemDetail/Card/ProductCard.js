import React from "react";
import { Image, Card } from "semantic-ui-react";

export const ProductCard = ({ item }) => {
  return (
    <Card>
      <Image src={item.imageUrl} width="5" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>

        <Card.Description>
          <p>$ {item.price}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
