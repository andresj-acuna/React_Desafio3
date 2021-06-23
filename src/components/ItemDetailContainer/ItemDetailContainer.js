import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../Home/ItemCount/ItemCount";
import { Card, Image } from "semantic-ui-react";


// import { Link } from "react-router-dom";
// import "../../ItemList/ItemList.css";

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
      2000,
    );
  });
};

export const ItemDetailContainer = () => {
  const [dataShow, setDataShow] = useState([]);
  const { productID } = useParams();
  console.log(productID);
  const onAdd = (cantidad) => {
    console.log('Agregar al carrito', cantidad);
  }


  // const onAdd = (cantidad) => {
  //   console.log("Agregar al carrito", cantidad);
  // };

  const runItemDetailContainer = () => {
    myPromise().then((data) => {

      const dataFilter = data.filter(element => element.id == productID);

      setDataShow(dataFilter);
      console.log(dataFilter);

    });
  };

  useEffect(() => {
    runItemDetailContainer();
  }, [productID]);

  return (
    <>
      {/* {dataShow.length === 0 ? (
        <Container className="container-loader">
          <Loader active inline="centered" size="large">
            Cargando el producto
          </Loader>
        </Container>
      ) : (
        <> */}
      <div className="card">
        {dataShow.map((element) => (
          <Card key={element.id}>
            <Image src={element.imageUrl} width="5" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{element.title}</Card.Header>

              <Card.Description>
                <p>$ {element.price}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );}
    // </>
  // );
// };
