import { Card } from "antd";

const Widget = ({
  title,
  children,
  className,
  cover,
  extra,
  actions,
  style,
  ...props
}) => {
  return (
    <Card
      title={title}
      actions={actions}
      cover={cover}
      className={`${className}`}
      extra={extra}
      style={style}
      {...props}
    >
      {children}
    </Card>
  );
};

export default Widget;
