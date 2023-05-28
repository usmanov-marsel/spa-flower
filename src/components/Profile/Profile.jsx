import React from "react";
import s from "./Profile.module.css";
import { Avatar, Button, Form, Input, Select, Typography } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} defaultValue={{ value: "+7", label: "+7" }}>
      <Select.Option value="+7">+7</Select.Option>
      <Select.Option value="8">8</Select.Option>
    </Select>
  </Form.Item>
);

export const Profile = () => {
  return (
    <div className={s.wrapper}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title level={3}>
          Профиль <Avatar size={32} icon={<UserOutlined />} />
        </Typography.Title>
        <Form.Item
          label="ФИО"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} suffix={<EditOutlined />} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
