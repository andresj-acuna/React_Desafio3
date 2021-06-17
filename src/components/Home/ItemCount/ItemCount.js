import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import "./ItemCount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1);


  let btnDel = false;
  let btnAdd = false;

   const delOneItem = (e) => {
     count > 1
       ? setCount(count - 1)
       : console.log("El stock debe ser mayor a 1");
      //  console.log(btnDel);
   }

  const addOneItem = (e) => {
    count < stock ? setCount(count + 1) : console.log("Ha superado el stock");

  }

  if (count === 1) {
    btnDel = true;
  }

  if (count === stock) {
    btnAdd = true;
  }


  return (
    <>
      <Container>
        <div className="center">
          <button disabled={btnDel} onClick={delOneItem}>
            -
          </button>
          <div>{count}</div>
          <button disabled={btnAdd} onClick={addOneItem}>
            +
          </button>
        </div>
        <div className="center">
          <button className="btn_Carrito" onClick={() => onAdd(initial)}>AGREGAR AL CARRITO</button>
        </div>
      </Container>
    </>
  );
};
