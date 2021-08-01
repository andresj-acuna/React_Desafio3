import React, { useState, useEffect, useContext } from 'react';

//Luxon
import { DateTime } from 'luxon';

//Context
import { CartContext } from '../../Context/CartContext';

//Firestore
import { db } from '../../firebase/firebase';

//Styles
import './MyOrders.css'

export const MyOrders = () => {
  const { orderIds, setOrderIds } = useContext(CartContext);

  const [ordersInfo, setOrdersInfo] = useState([]);

  useEffect(() => {
    let isMounted = true;

    // En "getOrders", "itemRefs" devuelve una promesa del documento especifico por cada id de compra que hay en el array de ids "orderIds".
    // Luego voy a esperar que se resuelvan todas esas promesas con un Promise.All y ahi si llamar a setOrdersInfo para guardar la informacion.
    if (isMounted) {
      const getOrders = (orderIds, setOrdersInfo) => {
        let itemRefs = orderIds.map(({ id }) => {
          return db.collection('orders').doc(id).get();
        });

        Promise.all(itemRefs)
          .then((docs) => {
            let items = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            //Reverse para que la ultima compra figure arriba
            setOrdersInfo(items.reverse());
          })
          .catch((e) => console.log(e));
      };
      getOrders(orderIds, setOrdersInfo);

      return () => {
        isMounted = false;
      };
    }
  }, [orderIds]);

  const time = (seconds) => {
    return DateTime.fromSeconds(seconds);
  };

  return (
    <div className='orders-container'>
      <div className='orders-organizer'>
        <h3 className='title'>Mis compras</h3>

        <button
          className='waves-effect  waves-light btn'
          onClick={() => {
            localStorage.removeItem('my-orders');
            setOrderIds([]);
          }}
        >
          Borrar historial
        </button>

        <div className='orders-columns'>
          <p>Fecha</p>
          <p>Productos</p>
          <p>Codigo de pedido</p>
          <p>Total</p>
        </div>
        <div className='orders'>
          {ordersInfo.length > 0 &&
            ordersInfo.map(({ id, total, date, items }) => (
              <div className='order-row' key={id}>
                <div className='order-info date'>
                  {date &&
                    `${time(date.seconds).c.day}/${
                      time(date.seconds).c.month
                    }/${time(date.seconds).c.year}
                                      ${time(date.seconds).c.hour}:${
                      time(date.seconds).c.minute
                    } `}
                </div>
                <div className='order-info items'>
                  <ul>
                    {items &&
                      items.map((item) => (
                        <li className='truncate' key={item.id}>
                          {' '}
                          {item.qty} x {item.item}{' '}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className='order-info id '> {id} </div>
                <div className='order-info total'> ${total} </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
