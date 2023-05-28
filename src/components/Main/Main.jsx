import React, { useEffect, useState } from "react";
import s from "./Main.module.css";
import { Constructor } from "../Constructor/Constructor";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const items = [
  {
    label: <Link to="/">Конструктор букета</Link>,
    key: "app",
  },
  {
    label: <Link to="/profile">Профиль</Link>,
    key: "profile",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/cart">Корзина</Link>,
    key: "alipay",
    icon: <ShoppingCartOutlined />,
  },
];

export const Main = () => {
  const [current, setCurrent] = useState("app");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className={s.wrapper}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Constructor />;
    </div>
  );
};
