import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { footerText } from "@mb/config";
const { Header, Content, Sider, Footer } = Layout;

function RootLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            insetInlineStart: 0,
            top: 0,
            bottom: 0,
            scrollbarWidth: "thin",
            scrollbarColor: "unset",
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={"200px"}
        >
          <div
            style={{
              height: "32px",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "16px",
            }}
          />

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout
          style={{
            marginInlineStart: collapsed ? "80px" : "200px",
            transition: "margin-inline-start 0.2s",
          }}
        >
          <Header
            style={{
              background: "#fff",
              padding: 0,
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: "lightgray",
                minHeight: "calc(100% - var(--ant-layout-header-height))",
              }}
            >
              <Outlet />
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              {footerText}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default RootLayout;
