import React, { useContext, useState, useEffect } from 'react';

// Import firebase para usar la libreria de timestamp
import firebase from 'firebase/app';
import '@firebase/firestore';

//Firestore
import { db } from '../../firebase/firebase';

//Context
import { CartContext } from '../../Context/CartContext';

// Semantic
// import {Form, Input} from 'semantic-ui-react'

//React-router
import { Link } from 'react-router-dom';

//History
import { useHistory } from 'react-router-dom';

//Hook-Form
import { useForm } from 'react-hook-form';

// Styles
import './BuyForm.css';

export const BuyForm = () => {
  const { cart, setCart, total, orderIds, setOrderIds, itemsInLocal } =
    useContext(CartContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const email = watch('email');
  const confirmEmail = watch('confirmEmail');

  const [passErr, setPassErr] = useState(false);

  const [error, setError] = useState(false);

  const [newId, setNewId] = useState();

  // const cartLocal = setCart(itemsInLocal);
  // console.log(cartLocal);

  let history = useHistory();

  useEffect(() => {
    if (cart.length !== 0) {
    }
  }, [cart, history]);

  //Funcion para actualizr los stocks en firestore de los productos recien comprados
  const updateStocks = () => {
    const itemCollection = db.collection('items');
    const bache = db.batch();

    cart.forEach((item) => {
      bache.update(itemCollection.doc(item.id), {stock: item.stock - item.quantity});
    });

    bache
      .commit()
      .then(() => {
        console.log('Bache ok');
      })
      .catch((e) => console.log(e));
  };

  const handleOrder = (data) => {
    if (data) {
      let order = {
        buyer: {
          name: `${data.name} ${data.lastname}`,
          phone: data.telephone,
          email: data.email
        },
        items: cart.map((item) => ({
          id: item.id,
          item: item.item,
          price: item.price,
          qty: item.quantity
        })),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total
      };
      console.log(order);
      console.log(cart);
      localStorage.removeItem('cart');
      console.log(cart);
      setCart(itemsInLocal);





      const ordersCollection = db.collection('orders');

      ordersCollection
        .add(order)
        .then(({ id }) => {
          setOrderIds([...orderIds, { id }]);
          setNewId(id);


        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          updateStocks();


          newId !== '' && history.push('/my-orders');
        });
    }
  };

  return (
    <div className='buy-form-container'>
      <form onSubmit={handleSubmit(handleOrder)} className='form-container'>
        <div className='input-field'>
          {/* <i className='material-icons prefix'>account_circle</i> */}
          <i className="user icon"></i>
          <input
            name='name'
            id='name'
            type='text'
            className='validate'
            autoComplete='none'
            ref={register({
              required: 'Ingresar nombre',
              minLength: { value: 2, message: 'Minimo 2 caracteres' },
              maxLength: { value: 12, message: 'Maximo 12 caracteres' },
            })}
          />
          <label htmlFor='name'>Nombre</label>
          {errors.name && <small>{errors.name.message}</small>}
        </div>

        <div className='input-field'>
        <i className="user icon"></i>
          <input
            name='lastname'
            id='lastname'
            type='text'
            className='validate'
            autoComplete='none'
            ref={register({
              required: 'Ingresar apellido',
              minLength: { value: 2, message: 'Minimo 2 caracteres' },
              maxLength: { value: 12, message: 'Maximo 12 caracteres' },
            })}
          />
          <label htmlFor='lastname'>Apellido</label>
          {errors.lastname && <small>{errors.lastname.message}</small>}
        </div>

        <div className='input-field'>
          {/* <i className='material-icons prefix'>phone</i> */}
          <i className='phone icon'></i>
          <input
            name='telephone'
            id='telephone'
            type='tel'
            className='validate'
            autoComplete='none'
            ref={register({
              required: 'Ingrese su numero',
              pattern: {
                value:
                  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
                message: 'Ingrese un numero valido',
              },
            })}
          />
          <label htmlFor='telephone'>Telefono/Celular</label>
          {errors.telephone && <small>{errors.telephone.message}</small>}
        </div>

        <div className='input-field'>
          {/* <i className='material-icons prefix'>email</i> */}
          <i className='mail icon'></i>
          <input
            name='email'
            id='email'
            type='email'
            className='validate'
            autoComplete='none'
            ref={register({
              required: 'Ingrese un email',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Ingrese un email valido',
              },
            })}
          />
          <label htmlFor='email'>Email</label>
          {errors.email && <small>{errors.email.message}</small>}
        </div>

        <div className='input-field'>
          {/* <i className='material-icons prefix'>email</i> */}
          <i className='mail icon'></i>
          <input
            name='confirmEmail'
            id='confirmEmail'
            type='email'
            className='validate'
            autoComplete='none'
            ref={register({
              required: 'Ingrese un email',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Ingrese un email valido',
              },
            })}
            onBlur={() =>
              confirmEmail !== email ? setPassErr(true) : setPassErr(false)
            }
            onChange={() => confirmEmail === email && setPassErr(false)}
          />
          <label htmlFor='confirmEmail'>Confirmar Email</label>
          {passErr && <small>{'Sus emails son diferentes'}</small>}
        </div>

        {/* Unica forma de que los autocomplete "none" funcionen fue agregando autoComplete = "none" a todos los inputs
        y crear un ultimo input innecesario (display: none) con autoComplete='on' */}
        <div className='input-field' style={{ display: 'none' }}>
          <i className='material-icons prefix'>email</i>
          <input id='asd' type='email' className='validate' autoComplete='on' />
          <label htmlFor='asd'>Email</label>
        </div>
        {/* Fin de input innecesario :D */}

        <h5 className='total-amount'>Subtotal &nbsp; ${total}</h5>
        <span></span>
        {error && <p>{error}</p>}

        {
          // <Link to={'/my-orders'}>
            <button
              disabled={confirmEmail !== email}
              type='submit'
              className='waves-effect btn btn-buy '

            >
              Finalizar compra
            </button>
          // </Link>
        }
      </form>
    </div>
  );
};

// {confirmEmail !== email}
