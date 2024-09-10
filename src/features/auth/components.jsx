import { Button, Card, Form, Input, Skeleton, Typography } from "antd";
import RootLayout from "components/RootLayout";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./hooks";

const { Title } = Typography;

export function RequireAuth() {
  let auth = useAuth();
  let location = useLocation();

  if (auth.loading) {
    return <Skeleton />;
  }

  if (!auth.user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return (
    <RootLayout user={auth.user}>
      <Outlet />
    </RootLayout>
  );
}

export function RequireRoles({ roles }) {
  let auth = useAuth();
  if (!roles.includes(auth.user?.role)) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export function RequireAnonymous() {
  let auth = useAuth();
  if (auth.user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export function AuthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export function SignIn() {
  const { signIn, loading } = useAuth();
  const [form] = Form.useForm();

  const handleSignIn = (values) => {
    console.log("Form values:", values);
    signIn({ username: values.username, password: values.password });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card style={{ width: 300, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Sign In
        </Title>
        <Form form={form} onFinish={handleSignIn} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" disabled={loading} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" disabled={loading} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
