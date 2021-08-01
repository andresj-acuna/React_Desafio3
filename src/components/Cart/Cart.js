import React, { useContext } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

import './Cart.css';

export const Cart = ({ item }) => {
  const { cart, total, deleteItem } = useContext(CartContext);
  const formatPeso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  })

  console.log(formatPeso.format(10000))


  return (

    <div className="cart-container">
      {cart.length > 0 ? (
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell className='quantity'>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>Eliminar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {cart.map((item, i) => (
            <>
              <Table.Body key={i}>
                <Table.Row>
                  <Table.Cell clasName='imgProduct'>
                    <div className='product-table'>
                      <img src={item.imageUrl} alt={item.item} width='100' />
                      <p>{item.item}</p>
                    </div>
                  </Table.Cell>
                  {/* <Table.Cell>${item.price},00</Table.Cell> */}
                  <Table.Cell>{formatPeso.format(item.price)}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell>{formatPeso.format(item.quantity * item.price)}</Table.Cell>
                  <Table.Cell>
                    <Icon
                      onClick={() => deleteItem(item.item)}
                      link
                      name='close'
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
              </Table.Body>
            </>
          ))}

          <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            {/* <h3>Subtotal: ${total},00</h3> */}


            <h3> Subtotal: <span>{formatPeso.format(total)}</span></h3>
          </Table.Cell>
          <Table.Cell>
          <Link to={"/order"}>

<Button color='teal'>
<div className='center-btn-cart'>
 <i className='shopping cart icon'><span>Agregar</span></i>
 </div>
</Button>

</Link>
          </Table.Cell>
          </Table.Row>
        </Table>
      ) : (
        <div className='cart-container'>
          <h2 className='text-cart'>Tu carrito está vacío</h2>
          <Link to='/' className='link-carrito'>
            <Button className='button-regresar'>Volver a la tienda</Button>
          </Link>
        </div>
      )}
      </div>

  );
};
