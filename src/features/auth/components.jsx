import { Skeleton, Card, Form, Input, Button, Typography } from "antd";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import RootLayout from "components/RootLayout";
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
  const { signIn } = useAuth();
  const [form] = Form.useForm();

  const handleSignIn = (values) => {
    console.log('Form values:', values);
    signIn(values.username, values.password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: 300, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>Sign In</Title>
        <Form form={form} onFinish={handleSignIn} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
