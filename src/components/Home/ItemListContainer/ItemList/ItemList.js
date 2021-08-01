import React from "react";

import "./ItemList.css";
import { Item } from "./Item/Item";

export const ItemList = ({ items }) => {
  return (
    <>
      {/* <div className="wrapper"> */}
      <div className="card">
        <Item item={items} />
      </div>
      {/* </div> */}
    </>
  );
};
