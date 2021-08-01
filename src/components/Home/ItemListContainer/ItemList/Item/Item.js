import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  console.log(item);
  const formatPeso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  })

  return (
    <>
      {item.map((data) => (
        <Card key={data.id}>
          <Image src={data.imageUrl} width="5" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>

            <Card.Description>
              <p>{formatPeso.format(data.price)}</p>

              <Link to={`/detalle/${data.id}`}>
                <Button color="teal"><span>Detalles</span></Button>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
