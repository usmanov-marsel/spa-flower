import React, { useEffect, useState } from "react";
import { $api, API_URL } from "../../http";
import { Button, Steps, Typography, message, theme } from "antd";
import { Products } from "../Products/Products";
import s from "./Constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearBouquet } from "../../redux/bouquet/slice";
import { addBouquet } from "../../redux/cart/slice";

const FLOWERS = "flowers";
const PACKAGES = "packages";
const DECORATIONS = "decorations";

export const Constructor = () => {
  const [flowers, setFlowers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [decorations, setDecorations] = useState([]);
  const bouquet = useSelector((state) => state.bouquet);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const fetchProducts = async (category) => {
    try {
      const { data } = await $api.get(`${API_URL}/${category}`);
      if (category == FLOWERS) setFlowers(data["hydra:member"]);
      if (category == PACKAGES) setPackages(data["hydra:member"]);
      if (category == DECORATIONS) setDecorations(data["hydra:member"]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(FLOWERS);
    fetchProducts(PACKAGES);
    fetchProducts(DECORATIONS);
  }, [cart]);
  const steps = [
    {
      title: "Цветы",
      content: <Products category="flower" products={flowers} />,
    },
    {
      title: "Упаковка",
      content: <Products category="package" products={packages} />,
    },
    {
      title: "Украшение",
      content: <Products category="decoration" products={decorations} />,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className={s.wrapper}>
      <Typography.Title level={3}>Собери букет</Typography.Title>
      <Steps current={current} items={items} />
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              message.success("Добавлено!");
              dispatch(addBouquet(bouquet));
              dispatch(clearBouquet());
              setCurrent(0);
            }}
          >
            Добавить в корзину
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Назад
          </Button>
        )}
      </div>
      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
};
