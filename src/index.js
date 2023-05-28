import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sider from "antd/es/layout/Sider";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#f5f5f5",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FE811E",
            },
          }}
        >
          <Layout>
            <Header />
            <Content className="content">
              <div className="content-wrapper">
                <App />
              </div>
            </Content>
            <Footer className="footer"></Footer>
          </Layout>
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
