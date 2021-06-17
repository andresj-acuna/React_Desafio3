import React, { useState, useEffect } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import { Card, Image } from "semantic-ui-react";
import { Loader, Container } from "semantic-ui-react";
import "./ItemList.css"

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: 'Samsung QLED 55" 4K Smart TV Q60T',
            price: 110.999,
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/I/91XcqPZTw8L._AC_SL1500_.jpg",
          },
          {
            id: 2,
            title: 'LG OLED 65" 65OLEDBX UHD 4K',
            price: 339.999,
            imageUrl:
              "https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=QQ0yhbckBQ2IhYgdExTuC8$daE2N3K4ZzOUsqbU5sYuIjB4orM1IncdP5RYpRp7C6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
          },
          {
            id: 3,
            title: "Joystick Inalámbrico Sony DualSense PS5",
            price: 10.999,
            imageUrl:
              "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-midnight-black-image-block-01-en-10may21?$native--t$",
          },
          {
            id: 4,
            title: "Samsung Galaxy A70 Dual SIM 128GB",
            price: 90.999,
            imageUrl:
              "https://gselectronic.com.ar/wp-content/uploads/2019/12/SAMSUNG-GALAXY-A70-128GB-DS.jpg",
          },
        ]),
      2000
    );
  });
};

export const ItemList = () => {
  const [dataShow, setDataShow] = useState([]);

   const onAdd = (cantidad) => {
     console.log("Agregar al carrito", cantidad);
   };

  const runItemList = () => {
    myPromise().then(setDataShow);
  };

  useEffect(() => {
    runItemList();
  }, []);

  return (
    <>
      {dataShow.length === 0 ? (
        <Container>
          <Loader active inline="centered" size="large">Cargando</Loader>
        </Container>
      ) :

      (
        <>
        <div className="card">
          {dataShow.map((element, i) => (
            <Card key={i}>
              <Image src={element.imageUrl} width="5" wrapped ui={false} />
              <Card.Content>
                <Card.Header>{element.title}</Card.Header>

                <Card.Description>$ {element.price}</Card.Description>
              </Card.Content>
            </Card>

          ))}
        </div>
       <ItemCount stock={5} initial={1} onAdd={onAdd} />
       </>
      )}
    </>
  );


};

// export const CardExampleCard = () => (

//   {dataShow.map((element,i)} = >

// <Card>
//   <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
//   <Card.Content>
//     <Card.Header>Matthew</Card.Header>
//     <Card.Meta>
//       <span className='date'>Joined in 2015</span>
//     </Card.Meta>
//     <Card.Description>
//       Matthew is a musician living in Nashville.
//     </Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <a>
//       <Icon name='user' />
//       22 Friends
//     </a>
//   </Card.Content>
// </Card>

// )
