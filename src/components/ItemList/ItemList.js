import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
            {items?.map((item) => (
              <Item
                {...item}
                key={item.id}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

