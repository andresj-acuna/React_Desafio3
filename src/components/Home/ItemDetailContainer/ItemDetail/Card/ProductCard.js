import React from "react";

import { useState, useContext } from "react";

import {CartContext} from '../../../../../Context/CartContext';

// import { Image, Card } from "semantic-ui-react";
import { Icon, Image, Item, Rating } from 'semantic-ui-react'




import {ItemCount} from '../../../ItemCount/ItemCount'



import './ProductCard.css'

export const ProductCard = ({ item }) => {

  const formatPeso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  })

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

    setInitial(count);
    myContext.updateItems();
  }



  console.log(item.stock);


  return (
    // <Card>
    //   <Image src={item.imageUrl} width="5" wrapped ui={false} />
    //   <Card.Content>
    //     <Card.Header>{item.title}</Card.Header>
    //     <Card.Header>{item.detail}</Card.Header>

    //     <Card.Description>
    //       <p>{formatPeso.format(item.price)}</p>
    //     </Card.Description>
    //   </Card.Content>
    // </Card>


    <Item className='item-container'>
    <Item.Image src={item.imageUrl} className='item-image'/>


    <Item.Content className='item-content'>
      <Item.Header className='item-title'><h2>{item.title}</h2></Item.Header>
      <Item.Extra>

<Rating icon='star' defaultRating={5} maxRating={5} clearable />
</Item.Extra>
      <Item.Header className='item-price'><h3>{formatPeso.format(item.price)}</h3></Item.Header>
      <Item.Description className='item-description'><p>{item.detail}</p></Item.Description>

      <Item.Extra>
        {item.stock > 0 ? <div className='tags'>
          <span className='tag tag-stock'>En stock</span>
        </div> : <div className='tags'><span className='tag tag-no-stock'>Sin stock</span> </div>  }

      </Item.Extra>

      <ItemCount
          stock={item.stock}
          initial={initial}
          item={item}
          addCart={addCart}
        />

    </Item.Content>
  </Item>



  );
};
