import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import "./ItemCount.css";

export const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  let botonActive1 = false;
  let botonActive2 = false;
  let stock = 6;

  const addOneItem = (e) => {
    count < stock ? setCount(count + 1) : console.log("Ha superado el stock");
  };

  if (count === stock) {
    botonActive2 = true;
  }

  if (count === 0) {
    botonActive1 = true;
  }

  const delOneItem = (e) => {
    count > 0
      ? setCount(count - 1)
      : console.log("El stock debe ser mayor a 0");
  };

  return (
    <Container className="contenedor">
      <p className="center">{count}</p>
      <div className="center">
        <button disabled={botonActive1} onClick={delOneItem}>
          -
        </button>
        <button disabled={botonActive2} onClick={addOneItem}>
          +
        </button>
      </div>
      <div className="center">
        <button className="btn_Carrito">AGREGAR AL CARRITO</button>
      </div>
    </Container>
  );
};
