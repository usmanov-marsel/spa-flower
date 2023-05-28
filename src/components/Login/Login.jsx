import { Button, Checkbox, Form, Input, Select, Typography } from "antd";
import s from "./Login.module.css";
import { $api, API_URL } from "../../http";
import { Link } from "react-router-dom";

const onFinish = async (values) => {
  const { data } = await $api.post(`${API_URL}/login_check`, {
    email: values.email,
    password: values.password,
  });
  localStorage.setItem("token", data.token);
  window.location = "/";
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Login = () => (
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
      <Form.Item
        className={s.link}
        wrapperCol={{
          offset: 13,
        }}
      >
        <Link to="/registration">Зарегистрироваться</Link>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Typography.Title level={3}>Вход</Typography.Title>
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  </div>
);
