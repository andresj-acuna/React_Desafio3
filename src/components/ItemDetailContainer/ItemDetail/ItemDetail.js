import React, { useState } from "react";
import { ItemCount } from "../../Home/ItemCount/ItemCount";
import { Card, Image, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ dataShow }) => {
  const onAdd = (cantidad) => {
    console.log("Agregar al carrito", cantidad);
    setShow(!show);
    setInitial(cantidad);
  };

  const showCount = () => {
    setShow(!show);
  };

  const [show, setShow] = useState(true);
  const [initial, setInitial] = useState(1);

  return (
    <>
      {dataShow.map((element) => (
        <Container className="itemDetail" key={element.id}>
          <Card>
            <Image src={element.imageUrl} width="5" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{element.title}</Card.Header>

              <Card.Description>
                <p>$ {element.price}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
      ))}
      {show ? (
        <Container>
          <ItemCount stock={5} initial={initial} onAdd={onAdd} />
        </Container>
      ) : (
        <Container>
          <div className="item-detail-container">
            <h3>Cantidad: {initial}</h3>
            <div className="buttons-compra">
              <div className="button-cancelar-container">
                <Button className="button-cancelar" onClick={() => showCount()}>
                  Cancelar
                </Button>
              </div>
              <div className="button-finalizar-container">
                <Link to={"/cart"}>
                  <Button className="button-finalizar">Finalizar Compra</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
