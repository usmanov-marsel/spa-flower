import React from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import s from "./Products.module.css";

export const Products = ({ category, products }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.products}>
        {products.map((product) => (
          <ProductItem category={category} key={product["@id"]} product={product} />
        ))}
      </div>
    </div>
  );
};
