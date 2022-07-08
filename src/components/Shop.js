import React from "react";
import Item from "./Item";
import inventory from "../inventory";
import { nanoid } from "nanoid";

function Shop() {
  const items = inventory.map((item) => {
    return (
      <Item
        name={item.name}
        thumbnail={item.thumbnail}
        price={item.price}
        description={item.description}
        key={nanoid()}
      />
    );
  });

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="items-container">{items}</div>
    </div>
  );
}

export default Shop;
