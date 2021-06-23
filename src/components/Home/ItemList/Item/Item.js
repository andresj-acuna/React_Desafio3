import React from "react";
import {Card, Image, Button} from "semantic-ui-react";
import {Link} from 'react-router-dom';


export const Item = ({ dataShow }) => {
  console.log(dataShow);

  return (
    <>
      {dataShow.map((data) => (
    <Card key={data.id}>
      <Image src={data.imageUrl} width="5" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>

        <Card.Description>
          <p>$ {data.price}</p>
          <Button color="teal">
            <Link to={`/detalle/${data.id}`}>Detalles</Link>
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  ))}
  </>
  )

}