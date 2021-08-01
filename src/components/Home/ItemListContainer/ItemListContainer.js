import React, { useEffect, useState } from "react";
import { Container, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";

import { ItemList } from "./ItemList/ItemList";

import { db } from "../../../firebase/firebase";



export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(documents);
      });
  }, []);

  // return (
  //   <>
  //     {items.length === 0 ? (
  //       <Container className="container-loader">
  //         <Loader active inline="centered" size="large">
  //           Cargando
  //         </Loader>
  //       </Container>
  //     ) : (
  //       <ItemList items={items} />
  //     )}
  //   </>
  // );

  if (items.length > 0){

    if(category !== undefined){
        return(


                <ItemList items={ items.filter(product => product.category === `${category}`) } />

        )
    }else{
        return(

                <ItemList items={items} />


        )
    }
}else{
    return(
      <Container className="container-loader">
               <Loader active inline="centered" size="large">
                 Cargando
               </Loader>
             </Container>
    )
}



};
