import React, { useState, useContext } from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { ProductCard } from "./Card/ProductCard";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const [show, setShow] = useState(true);
  const [initial, setInitial] = useState(1);

  const myContext = useContext(CartContext);

  const addCart = (count, item) => {
    myContext.addToCart({
      item: item.title,
      quantity: count,
      price: item.price,
      imageUrl: item.imageUrl,
      id: item.id,
      stock: item.stock,
    });

    setShow(!show);
    setInitial(count);
    myContext.updateItems();
  };

  const showCount = () => {
    setShow(!show);
  };

  return (
    <>
      <Container className="itemDetail" key={item.id}>
        <ProductCard item={item} />
      </Container>

      {show ? (
        <Container>
          <ItemCount
            stock={item.stock}
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
                  <Button className="button-finalizar" item={item}>
                    Finalizar Compra
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
