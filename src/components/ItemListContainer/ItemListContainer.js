import React from 'react';

const h2Styles = {
  fontSize: 40,
  color: '#3A3539',
  textAlign: 'center',

 };

export const ItemListContainer = ({ title }) => {
  return <h2 style={h2Styles}>{title}</h2>

}

