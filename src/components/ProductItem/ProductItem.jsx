import { Button, Card, Tag, Typography, message } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import s from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFlower, minusFlower, setDecoration, setPackage } from "../../redux/bouquet/slice";

export const ProductItem = ({ category, product }) => {
  const dispatch = useDispatch();
  const bouquet = useSelector((state) => state.bouquet);
  const [count, setCount] = useState(0);
  const addItem = () => {
    if (category == "flower") dispatch(addFlower(product));
    if (category == "package" && bouquet.package) {
      message.error("Упаковка уже выбрана");
      return;
    }
    if (category == "decoration" && bouquet.decoration) {
      message.error("Украшение уже выбрано");
      return;
    }
    if (count == 0 && category == "package") {
      dispatch(setPackage(product));
    }
    if (count == 0 && category == "decoration") {
      dispatch(setDecoration(product));
    }
    if (count != 0 && category != "flower") return;
    setCount(count + 1);
  };
  const minusItem = () => {
    setCount(count - 1);
    if (category == "flower") dispatch(minusFlower(product));
  };
  const removeItem = () => {
    setCount(count - 1);
    if (category == "package") dispatch(setPackage(null));
    if (category == "decoration") dispatch(setDecoration(null));
  };
  if (!product) return <></>;
  return (
    <Card hoverable className={count == 0 ? s.card : s.cardAdd}>
      <div className={s.grid}>
        <Typography.Title level={5}>{product.name}</Typography.Title>
        <img alt="example" src={`https://localhost:8000/images/${product.img}`} />
        <div className={s.priceWrapper}>
          <div className={s.price}>{product.price / 100} ₽</div>
          {count == 0 && (
            <Button type="primary" onClick={addItem}>
              Добавить
            </Button>
          )}
          {count != 0 && category == "flower" && (
            <div className={s.btnAdd}>
              <div>Кол-во: {count}</div>
              <Button
                size="small"
                type="primary"
                shape="circle"
                icon={<MinusOutlined />}
                onClick={minusItem}
              />
              <Button
                size="small"
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={addItem}
              />
            </div>
          )}
          {count != 0 && category != "flower" && (
            <div className={s.btnAdd}>
              <div>Выбрано!</div>
              <Button danger onClick={removeItem}>
                Убрать
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
