import React from "react";
import s from "./CartItem.module.css";
import { Button, Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateBouquet } from "../../redux/cart/slice";

export const CartItem = ({ bouquet }) => {
  return (
    <div>
      {bouquet.flowers.map((flower) => (
        <Item category="flower" product={flower} bouquet={bouquet} />
      ))}
      <Item category="package" product={bouquet.package} bouquet={bouquet} />
      <Item category="decoration" product={bouquet.decoration} bouquet={bouquet} />
    </div>
  );
};

const Item = ({ category, product, bouquet }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onPlus = () => {
    const flowers = bouquet.flowers.map((flower) => {
      if (flower.id == product.id) {
        return { ...flower, count: flower.count + 1 };
      }
      return flower;
    });
    dispatch(updateBouquet({ ...bouquet, flowers, price: bouquet.price + product.price }));
  };
  const onMinus = () => {
    const flowers = bouquet.flowers.map((flower) => {
      if (flower.id == product.id) {
        return { ...flower, count: flower.count - 1 };
      }
      return flower;
    });
    dispatch(updateBouquet({ ...bouquet, flowers, price: bouquet.price - product.price }));
  };
  return (
    <div className={s.item}>
      <img alt="photo" src={`https://localhost:8000/images/${product.img}`}></img>
      <div>{product.name}</div>
      {category == "flower" && (
        <div className={s.count}>
          <Button
            size="small"
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={onMinus}
          />
          <div>{product.count}</div>
          <Button
            size="small"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={onPlus}
          />
        </div>
      )}
      {category != "flower" && <div className={s.count}></div>}
      <div>{(product.price * product.count) / 100} ₽</div>
    </div>
  );
};
