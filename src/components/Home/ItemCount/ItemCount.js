import React, { useState } from "react";

import { Container, Button } from "semantic-ui-react";

import {Link} from 'react-router-dom'

import "./ItemCount.css";

export const ItemCount = ({ stock, initial, item, addCart }) => {
  const [count, setCount] = useState(parseInt(initial));

  let btnDel = false;
  let btnAdd = false;
  let btnStock = false;

  const delOneItem = (e) => {
    count > 1
      ? setCount(count - 1)
      : console.log("El stock debe ser mayor a 1");
    //  console.log(btnDel);
  };

  const addOneItem = (e) => {
    count < stock ? setCount(count + 1) : console.log("Ha superado el stock");
  };



  if (stock === 0) {
    btnStock= true;

  }

  if (count === 1) {
    btnDel = true;
  }

  if (count === stock) {
    btnAdd = true;
  }

  return (
    <Container>
      <div className="buttons-container">
        {/* <button disabled={btnDel} onClick={delOneItem}>
          -
        </button> */}
        <div className='all-buttons'>
        <button disabled={btnDel} onClick={delOneItem} className='minus-button'>
          <i className='minus icon'></i>
        </button>

        {stock === 0 ? <div><p>0</p></div> :  <div>
          <p>{count}</p>
        </div>}

        {stock === 0 ? <button disabled={btnStock} className='plus-button'>
          <i className='plus icon'></i>
        </button> :

        <button disabled={btnAdd} onClick={addOneItem} className='plus-button'>
          <i className='plus icon'></i>
        </button>}
      </div>

      </div>
      <div className='cart-button'>
      {/* */}

      {stock === 0 ? <Button color='teal' disabled={btnStock} className="btn_Carrito" onClick={() => addCart(count, item)}>
<div className='center-btn-cart'>
 <i className='shopping cart icon'><span>Agregar</span></i>
 </div>
</Button> : <Link to={"/cart"}>

<Button color='teal' disabled={btnStock} className="btn_Carrito" onClick={() => addCart(count, item)}>
<div className='center-btn-cart'>
 <i className='shopping cart icon'><span>Agregar</span></i>
 </div>
</Button>

</Link> }

      </div>
    </Container>
  );
};
