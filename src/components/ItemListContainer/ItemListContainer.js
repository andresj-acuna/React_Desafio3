import React from 'react';

const h2Styles = {
  fontSize: 40,
  color: '#3A3539',
  textAlign: 'center',

 };

function ItemListContainer(greeting){
  return (
    <>

      <h2 style={h2Styles}>{greeting.title}</h2>

    </>


  )
}

export default ItemListContainer;