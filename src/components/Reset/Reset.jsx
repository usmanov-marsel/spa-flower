import { Button, Checkbox, Form, Input, Select, Typography } from "antd";
import s from "./Reset.module.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Reset = () => (
  <div className={s.wrapper}>
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      style={{
        maxWidth: 1000,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Typography.Title level={3}>Восстановление пароля</Typography.Title>
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
        label="Новый пароль"
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
          offset: 10,
          span: 14,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  </div>
);
