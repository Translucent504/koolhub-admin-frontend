import {
  AimOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TruckOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { footerText } from "@mb/config";
import { Avatar, Button, Dropdown, Flex, Layout, Menu } from "antd";
import { useAuth } from "features/auth/hooks";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Sider, Footer } = Layout;

const NavMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[pathname]}
      items={[
        {
          key: "/",
          icon: <VideoCameraOutlined />,
          label: <NavLink to="/">Home</NavLink>,
        },
        {
          icon: <UserOutlined />,
          label: "Sample",
          children: [
            {
              key: "/sample/",
              icon: <UserOutlined />,
              label: <NavLink to="/sample">List</NavLink>,
            },
          ],
        },
        {
          key: "/vans",
          icon: <TruckOutlined />,
          label: <NavLink to="/vans">Van Management</NavLink>,
        },
      ]}
    />
  );
};

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
          <NavMenu />
        </Sider>
        <Layout
          style={{
            marginInlineStart: collapsed ? "80px" : "200px",
            transition: "margin-inline-start 0.2s",
          }}
        >
          <Header
            style={{
              padding: 0,
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              style={{ paddingInlineEnd: 24 }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "white",
                }}
              />
              <UserMenu />
            </Flex>
          </Header>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: "#F2EFF5",
                minHeight: "calc(100% - var(--ant-layout-header-height))",
                overflowX: "hidden",
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

function UserMenu() {
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Dropdown
      placement="bottomLeft"
      menu={{
        items: [
          {
            key: 1,
            icon: <AimOutlined />,
            label: "Something",
            disabled: true,
          },
          {
            key: 2,
            icon: <TruckOutlined />,
            label: "Something 2",
            disabled: true,
          },
          { type: "divider" },
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "Logout",
            onClick: handleLogout,
          },
        ],
      }}
      trigger={["click"]}
      arrow
    >
      <Button
        style={{ color: "white" }}
        type="text"
        icon={<Avatar icon={<UserOutlined />} />}
      >
        {user.name}
      </Button>
    </Dropdown>
  );
}
