import React, { useState, useContext } from "react";
import { ItemCount } from "../../Home/ItemCount/ItemCount";
import { Card, Image, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const [show, setShow] = useState(true);
  const [initial, setInitial] = useState(1);
  const myContext = useContext(CartContext);

  const addCart = (count, item) => {
    setShow(!show);
    setInitial(count);
    myContext.addItem({ item, quantity: count });
  };

  const showCount = () => {
    setShow(!show);
  };

  return (
    <>
      {item.map((element) => (
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
          <ItemCount
            stock={5}
            initial={initial}
            item={item}
            addCart={addCart}
          />
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
