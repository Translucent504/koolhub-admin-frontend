import { Skeleton } from "antd";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import RootLayout from "components/RootLayout";
import { useAuth } from "./hooks";

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
  const handleSignIn = () => {
    signIn();
  };
  return (
    <div>
      <input placeholder="username" />
      <input placeholder="password" />
      <button onClick={handleSignIn}>sign in </button>
    </div>
  );
}
