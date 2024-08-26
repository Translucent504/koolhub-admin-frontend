import { Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Result
      status={error.status}
      title={error.status}
      subTitle={error.statusText || error.message}
      extra={<Link to="/">Go to Home Page</Link>}
    />
  );
}
