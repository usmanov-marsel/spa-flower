import { Button, Checkbox, Form, Input, Select, Typography, message } from "antd";
import s from "./Registration.module.css";
import { $api, API_URL } from "../../http";

const onFinish = async (values) => {
  try {
    const { data } = await $api.post(`${API_URL}/login`, {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    });
    localStorage.setItem("token", data.token);
    window.location = "/";
  } catch {
    message.error("Пользователь с таким email уже существует");
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Error:", errorInfo);
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} defaultValue={{ value: "+7", label: "+7" }}>
      <Select.Option value="+7">+7</Select.Option>
      <Select.Option value="8">8</Select.Option>
    </Select>
  </Form.Item>
);
export const Registration = () => (
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
      <Typography.Title level={3}>Регистрация</Typography.Title>
      <Form.Item
        label="Имя"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
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
        label="Номер телефона"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  </div>
);
